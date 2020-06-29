import debugFactory from 'debug'
import { provider } from 'web3-core'
import { Callback, JsonRpcPayload, JsonRpcResponse } from 'web3-core-helpers'

const debugRpcPayload = debugFactory('rpc:payload')
const debugRpcResponse = debugFactory('rpc:response')
const debugRpcCallback = debugFactory('rpc:callback:exception')
const debugRpcTelemetry = debugFactory('rpc:telemetry')

export function rpcCallHandler(
  payload: JsonRpcPayload,
  handler: (p: JsonRpcPayload) => Promise<any>,
  callback: Callback<JsonRpcResponse>
) {
  try {
    handler(payload)
      .then(
        (result) => {
          callback(null, toRPCResponse(payload, result))
        },
        // Called if the Promise of the 'handler' fails
        (error) => {
          callback(error, toRPCResponse(payload, null, error))
        }
      )
      .catch((error) => {
        // Called if the 'callback' fails
        debugRpcCallback('Callback for handling the JsonRpcResponse fails')
        debugRpcCallback('%O', error)
      })
  } catch (error) {
    // Called if the handler fails before making the promise
    callback(error)
  }
}

// Ported from: https://github.com/MetaMask/provider-engine/blob/master/util/random-id.js
export function getRandomId(): number {
  const extraDigits = 3
  const baseTen = 10
  // 13 time digits
  const datePart = new Date().getTime() * Math.pow(baseTen, extraDigits)
  // 3 random digits
  const extraPart = Math.floor(Math.random() * Math.pow(baseTen, extraDigits))
  // 16 digits
  return datePart + extraPart
}

function toRPCResponse(payload: JsonRpcPayload, result: any, error?: Error): JsonRpcResponse {
  const response: JsonRpcResponse = {
    id: Number(payload.id),
    jsonrpc: payload.jsonrpc,
    result,
  }

  if (error != null) {
    ;(response.error as any) = {
      message: error.message || error.stack || error,
      code: -32000,
    }
  }
  return response
}

export interface RpcCaller {
  call: (method: string, params: any[]) => Promise<JsonRpcResponse>
  send: (payload: JsonRpcPayload, callback: Callback<JsonRpcResponse>) => void
}
export class DefaultRpcCaller implements RpcCaller {
  constructor(
    readonly defaultProvider: provider,
    readonly telemetryHandler: TelemetryHandler | null = new DefaultTelemetryHandler(),
    readonly jsonrpcVersion: string = '2.0'
  ) {}

  public async call(method: string, params: any[]): Promise<JsonRpcResponse> {
    return new Promise((resolve, reject) => {
      const id = getRandomId()
      const payload: JsonRpcPayload = {
        id,
        jsonrpc: this.jsonrpcVersion,
        method,
        params,
      }
      this.send(payload, ((err: any, response: JsonRpcResponse) => {
        if (err != null) {
          reject(err)
        } else {
          resolve(response)
        }
      }) as Callback<JsonRpcResponse>)
    })
  }

  public send(payload: JsonRpcPayload, callback: Callback<JsonRpcResponse>) {
    debugRpcPayload('%O', payload)

    const start = new Date().getTime()
    const decoratedCallback = ((error: Error, result: JsonRpcResponse): void => {
      let err: Error = error
      const duration = new Date().getTime() - start
      if (this.telemetryHandler) {
        // Assume method parameters are the first element
        const params = payload.params[0]
        const to = params?.to
        const from = params?.from

        this.telemetryHandler.handleEvent(
          ['contractkit', 'rpc_caller', 'send'],
          { duration },
          {
            method: payload.method,
            id: payload.id?.toString(),
            to,
            from,
            params: payload.params,
          }
        )
      }
      debugRpcResponse('%O', result)
      // The provider send call will not provide an error to the callback if
      // the result itself specifies an error. Here, we extract the error in the
      // result.
      if (
        result &&
        result.error != null &&
        typeof result.error !== 'string' &&
        (result.error as any).message != null
      ) {
        err = new Error((result.error as any).message)
      }
      callback(err as any, result)
    }) as Callback<JsonRpcResponse>

    if (this.defaultProvider && typeof this.defaultProvider !== 'string') {
      this.defaultProvider.send(payload, decoratedCallback)
    }
  }
}

interface TelemetryMeasurements {
  duration: number
}

export interface TelemetryHandler {
  handleEvent: (path: string[], measurements: TelemetryMeasurements, metadata: any) => void
}

export class DefaultTelemetryHandler implements TelemetryHandler {
  handleEvent(path: string[], measurements: { duration: number }, metadata: any) {
    debugRpcTelemetry('Path: %o, Duration: %s, metadata: %o', path, measurements.duration, metadata)
  }
}
