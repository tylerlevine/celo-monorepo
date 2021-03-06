# Class: AccountsWrapper

Contract for handling deposits needed for voting.

## Hierarchy

* [BaseWrapper](_wrappers_basewrapper_.basewrapper.md)‹Accounts›

  ↳ **AccountsWrapper**

## Index

### Constructors

* [constructor](_wrappers_accounts_.accountswrapper.md#constructor)

### Properties

* [createAccount](_wrappers_accounts_.accountswrapper.md#createaccount)
* [eventTypes](_wrappers_accounts_.accountswrapper.md#eventtypes)
* [events](_wrappers_accounts_.accountswrapper.md#events)
* [getAttestationSigner](_wrappers_accounts_.accountswrapper.md#getattestationsigner)
* [getDataEncryptionKey](_wrappers_accounts_.accountswrapper.md#getdataencryptionkey)
* [getMetadataURL](_wrappers_accounts_.accountswrapper.md#getmetadataurl)
* [getValidatorSigner](_wrappers_accounts_.accountswrapper.md#getvalidatorsigner)
* [getVoteSigner](_wrappers_accounts_.accountswrapper.md#getvotesigner)
* [getWalletAddress](_wrappers_accounts_.accountswrapper.md#getwalletaddress)
* [hasAuthorizedAttestationSigner](_wrappers_accounts_.accountswrapper.md#hasauthorizedattestationsigner)
* [isAccount](_wrappers_accounts_.accountswrapper.md#isaccount)
* [isSigner](_wrappers_accounts_.accountswrapper.md#issigner)
* [methodIds](_wrappers_accounts_.accountswrapper.md#methodids)
* [setAccountDataEncryptionKey](_wrappers_accounts_.accountswrapper.md#setaccountdataencryptionkey)
* [setMetadataURL](_wrappers_accounts_.accountswrapper.md#setmetadataurl)
* [setName](_wrappers_accounts_.accountswrapper.md#setname)
* [signerToAccount](_wrappers_accounts_.accountswrapper.md#signertoaccount)
* [validatorSignerToAccount](_wrappers_accounts_.accountswrapper.md#validatorsignertoaccount)
* [voteSignerToAccount](_wrappers_accounts_.accountswrapper.md#votesignertoaccount)

### Accessors

* [address](_wrappers_accounts_.accountswrapper.md#address)

### Methods

* [authorizeAttestationSigner](_wrappers_accounts_.accountswrapper.md#authorizeattestationsigner)
* [authorizeValidatorSigner](_wrappers_accounts_.accountswrapper.md#authorizevalidatorsigner)
* [authorizeValidatorSignerAndBls](_wrappers_accounts_.accountswrapper.md#authorizevalidatorsignerandbls)
* [authorizeVoteSigner](_wrappers_accounts_.accountswrapper.md#authorizevotesigner)
* [generateProofOfKeyPossession](_wrappers_accounts_.accountswrapper.md#generateproofofkeypossession)
* [generateProofOfKeyPossessionLocally](_wrappers_accounts_.accountswrapper.md#generateproofofkeypossessionlocally)
* [getAccountSummary](_wrappers_accounts_.accountswrapper.md#getaccountsummary)
* [getCurrentSigners](_wrappers_accounts_.accountswrapper.md#getcurrentsigners)
* [getName](_wrappers_accounts_.accountswrapper.md#getname)
* [getPastEvents](_wrappers_accounts_.accountswrapper.md#getpastevents)
* [parseSignatureOfAddress](_wrappers_accounts_.accountswrapper.md#parsesignatureofaddress)
* [setAccount](_wrappers_accounts_.accountswrapper.md#setaccount)
* [setWalletAddress](_wrappers_accounts_.accountswrapper.md#setwalletaddress)

## Constructors

###  constructor

\+ **new AccountsWrapper**(`kit`: [ContractKit](_kit_.contractkit.md), `contract`: Accounts): *[AccountsWrapper](_wrappers_accounts_.accountswrapper.md)*

*Inherited from [BaseWrapper](_wrappers_basewrapper_.basewrapper.md).[constructor](_wrappers_basewrapper_.basewrapper.md#constructor)*

*Defined in [contractkit/src/wrappers/BaseWrapper.ts:26](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/BaseWrapper.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`kit` | [ContractKit](_kit_.contractkit.md) |
`contract` | Accounts |

**Returns:** *[AccountsWrapper](_wrappers_accounts_.accountswrapper.md)*

## Properties

###  createAccount

• **createAccount**: *function* = proxySend(this.kit, this.contract.methods.createAccount)

*Defined in [contractkit/src/wrappers/Accounts.ts:39](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Accounts.ts#L39)*

Creates an account.

#### Type declaration:

▸ (...`args`: InputArgs): *CeloTransactionObject‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  eventTypes

• **eventTypes**: *EventsEnum‹T›* = Object.keys(this.events).reduce<EventsEnum<T>>(
    (acc, key) => ({ ...acc, [key]: key }),
    {} as any
  )

*Inherited from [BaseWrapper](_wrappers_basewrapper_.basewrapper.md).[eventTypes](_wrappers_basewrapper_.basewrapper.md#eventtypes)*

*Defined in [contractkit/src/wrappers/BaseWrapper.ts:41](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/BaseWrapper.ts#L41)*

___

###  events

• **events**: *Accounts["events"]* = this.contract.events

*Inherited from [BaseWrapper](_wrappers_basewrapper_.basewrapper.md).[events](_wrappers_basewrapper_.basewrapper.md#events)*

*Defined in [contractkit/src/wrappers/BaseWrapper.ts:39](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/BaseWrapper.ts#L39)*

___

###  getAttestationSigner

• **getAttestationSigner**: *function* = proxyCall(
    this.contract.methods.getAttestationSigner
  )

*Defined in [contractkit/src/wrappers/Accounts.ts:46](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Accounts.ts#L46)*

Returns the attestation signer for the specified account.

**`param`** The address of the account.

**`returns`** The address with which the account can vote.

#### Type declaration:

▸ (`account`: string): *Promise‹Address›*

**Parameters:**

Name | Type |
------ | ------ |
`account` | string |

___

###  getDataEncryptionKey

• **getDataEncryptionKey**: *function* = proxyCall(this.contract.methods.getDataEncryptionKey, undefined, (res) =>
    solidityBytesToString(res)
  )

*Defined in [contractkit/src/wrappers/Accounts.ts:310](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Accounts.ts#L310)*

Returns the set data encryption key for the account

**`param`** Account

#### Type declaration:

▸ (...`args`: InputArgs): *Promise‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  getMetadataURL

• **getMetadataURL**: *function* = proxyCall(this.contract.methods.getMetadataURL)

*Defined in [contractkit/src/wrappers/Accounts.ts:324](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Accounts.ts#L324)*

Returns the metadataURL for the account

**`param`** Account

#### Type declaration:

▸ (...`args`: InputArgs): *Promise‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  getValidatorSigner

• **getValidatorSigner**: *function* = proxyCall(
    this.contract.methods.getValidatorSigner
  )

*Defined in [contractkit/src/wrappers/Accounts.ts:72](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Accounts.ts#L72)*

Returns the validator signer for the specified account.

**`param`** The address of the account.

**`returns`** The address with which the account can register a validator or group.

#### Type declaration:

▸ (`account`: string): *Promise‹Address›*

**Parameters:**

Name | Type |
------ | ------ |
`account` | string |

___

###  getVoteSigner

• **getVoteSigner**: *function* = proxyCall(
    this.contract.methods.getVoteSigner
  )

*Defined in [contractkit/src/wrappers/Accounts.ts:64](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Accounts.ts#L64)*

Returns the vote signer for the specified account.

**`param`** The address of the account.

**`returns`** The address with which the account can vote.

#### Type declaration:

▸ (`account`: string): *Promise‹Address›*

**Parameters:**

Name | Type |
------ | ------ |
`account` | string |

___

###  getWalletAddress

• **getWalletAddress**: *function* = proxyCall(this.contract.methods.getWalletAddress)

*Defined in [contractkit/src/wrappers/Accounts.ts:318](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Accounts.ts#L318)*

Returns the set wallet address for the account

**`param`** Account

#### Type declaration:

▸ (...`args`: InputArgs): *Promise‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  hasAuthorizedAttestationSigner

• **hasAuthorizedAttestationSigner**: *function* = proxyCall(
    this.contract.methods.hasAuthorizedAttestationSigner
  )

*Defined in [contractkit/src/wrappers/Accounts.ts:55](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Accounts.ts#L55)*

Returns if the account has authorized an attestation signer

**`param`** The address of the account.

**`returns`** If the account has authorized an attestation signer

#### Type declaration:

▸ (`account`: string): *Promise‹boolean›*

**Parameters:**

Name | Type |
------ | ------ |
`account` | string |

___

###  isAccount

• **isAccount**: *function* = proxyCall(this.contract.methods.isAccount)

*Defined in [contractkit/src/wrappers/Accounts.ts:109](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Accounts.ts#L109)*

Check if an account already exists.

**`param`** The address of the account

**`returns`** Returns `true` if account exists. Returns `false` otherwise.

#### Type declaration:

▸ (`account`: string): *Promise‹boolean›*

**Parameters:**

Name | Type |
------ | ------ |
`account` | string |

___

###  isSigner

• **isSigner**: *function* = proxyCall(
    this.contract.methods.isAuthorizedSigner
  )

*Defined in [contractkit/src/wrappers/Accounts.ts:116](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Accounts.ts#L116)*

Check if an address is a signer address

**`param`** The address of the account

**`returns`** Returns `true` if account exists. Returns `false` otherwise.

#### Type declaration:

▸ (`address`: string): *Promise‹boolean›*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

___

###  methodIds

• **methodIds**: *Record‹keyof T["methods"], string›* = Object.keys(this.contract.methods).reduce<Record<Methods<T>, string>>(
    (acc, method: Methods<T>) => {
      const methodABI = this.contract.options.jsonInterface.find((item) => item.name === method)

      acc[method] =
        methodABI === undefined
          ? '0x'
          : this.kit.connection.getAbiCoder().encodeFunctionSignature(methodABI)

      return acc
    },
    {} as any
  )

*Inherited from [BaseWrapper](_wrappers_basewrapper_.basewrapper.md).[methodIds](_wrappers_basewrapper_.basewrapper.md#methodids)*

*Defined in [contractkit/src/wrappers/BaseWrapper.ts:46](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/BaseWrapper.ts#L46)*

___

###  setAccountDataEncryptionKey

• **setAccountDataEncryptionKey**: *function* = proxySend(
    this.kit,
    this.contract.methods.setAccountDataEncryptionKey
  )

*Defined in [contractkit/src/wrappers/Accounts.ts:330](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Accounts.ts#L330)*

Sets the data encryption of the account

**`param`** The key to set

#### Type declaration:

▸ (...`args`: InputArgs): *CeloTransactionObject‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  setMetadataURL

• **setMetadataURL**: *function* = proxySend(this.kit, this.contract.methods.setMetadataURL)

*Defined in [contractkit/src/wrappers/Accounts.ts:387](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Accounts.ts#L387)*

Sets the metadataURL for the account

**`param`** The url to set

#### Type declaration:

▸ (...`args`: InputArgs): *CeloTransactionObject‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  setName

• **setName**: *function* = proxySend(this.kit, this.contract.methods.setName)

*Defined in [contractkit/src/wrappers/Accounts.ts:381](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Accounts.ts#L381)*

Sets the name for the account

**`param`** The name to set

#### Type declaration:

▸ (...`args`: InputArgs): *CeloTransactionObject‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  signerToAccount

• **signerToAccount**: *function* = proxyCall(
    this.contract.methods.signerToAccount
  )

*Defined in [contractkit/src/wrappers/Accounts.ts:100](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Accounts.ts#L100)*

Returns the account associated with `signer`.

**`param`** The address of the account or previously authorized signer.

**`dev`** Fails if the `signer` is not an account or previously authorized signer.

**`returns`** The associated account.

#### Type declaration:

▸ (`signer`: Address): *Promise‹Address›*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address |

___

###  validatorSignerToAccount

• **validatorSignerToAccount**: *function* = proxyCall(
    this.contract.methods.validatorSignerToAccount
  )

*Defined in [contractkit/src/wrappers/Accounts.ts:90](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Accounts.ts#L90)*

Returns the account address given the signer for validating

**`param`** Address that is authorized to sign the tx as validator

**`returns`** The Account address

#### Type declaration:

▸ (`signer`: Address): *Promise‹Address›*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address |

___

###  voteSignerToAccount

• **voteSignerToAccount**: *function* = proxyCall(
    this.contract.methods.voteSignerToAccount
  )

*Defined in [contractkit/src/wrappers/Accounts.ts:81](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Accounts.ts#L81)*

Returns the account address given the signer for voting

**`param`** Address that is authorized to sign the tx as voter

**`returns`** The Account address

#### Type declaration:

▸ (`signer`: Address): *Promise‹Address›*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address |

## Accessors

###  address

• **get address**(): *string*

*Inherited from [BaseWrapper](_wrappers_basewrapper_.basewrapper.md).[address](_wrappers_basewrapper_.basewrapper.md#address)*

*Defined in [contractkit/src/wrappers/BaseWrapper.ts:30](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/BaseWrapper.ts#L30)*

Contract address

**Returns:** *string*

## Methods

###  authorizeAttestationSigner

▸ **authorizeAttestationSigner**(`signer`: Address, `proofOfSigningKeyPossession`: Signature): *Promise‹CeloTransactionObject‹void››*

*Defined in [contractkit/src/wrappers/Accounts.ts:158](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Accounts.ts#L158)*

Authorize an attestation signing key on behalf of this account to another address.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`signer` | Address | The address of the signing key to authorize. |
`proofOfSigningKeyPossession` | Signature | The account address signed by the signer address. |

**Returns:** *Promise‹CeloTransactionObject‹void››*

A CeloTransactionObject

___

###  authorizeValidatorSigner

▸ **authorizeValidatorSigner**(`signer`: Address, `proofOfSigningKeyPossession`: Signature): *Promise‹CeloTransactionObject‹void››*

*Defined in [contractkit/src/wrappers/Accounts.ts:199](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Accounts.ts#L199)*

Authorizes an address to sign consensus messages on behalf of the account.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`signer` | Address | The address of the signing key to authorize. |
`proofOfSigningKeyPossession` | Signature | The account address signed by the signer address. |

**Returns:** *Promise‹CeloTransactionObject‹void››*

A CeloTransactionObject

___

###  authorizeValidatorSignerAndBls

▸ **authorizeValidatorSignerAndBls**(`signer`: Address, `proofOfSigningKeyPossession`: Signature, `blsPublicKey`: string, `blsPop`: string): *Promise‹CeloTransactionObject‹void››*

*Defined in [contractkit/src/wrappers/Accounts.ts:251](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Accounts.ts#L251)*

Authorizes an address to sign consensus messages on behalf of the account. Also switch BLS key at the same time.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`signer` | Address | The address of the signing key to authorize. |
`proofOfSigningKeyPossession` | Signature | The account address signed by the signer address. |
`blsPublicKey` | string | The BLS public key that the validator is using for consensus, should pass proof   of possession. 48 bytes. |
`blsPop` | string | The BLS public key proof-of-possession, which consists of a signature on the   account address. 96 bytes. |

**Returns:** *Promise‹CeloTransactionObject‹void››*

A CeloTransactionObject

___

###  authorizeVoteSigner

▸ **authorizeVoteSigner**(`signer`: Address, `proofOfSigningKeyPossession`: Signature): *Promise‹CeloTransactionObject‹void››*

*Defined in [contractkit/src/wrappers/Accounts.ts:178](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Accounts.ts#L178)*

Authorizes an address to sign votes on behalf of the account.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`signer` | Address | The address of the vote signing key to authorize. |
`proofOfSigningKeyPossession` | Signature | The account address signed by the signer address. |

**Returns:** *Promise‹CeloTransactionObject‹void››*

A CeloTransactionObject

___

###  generateProofOfKeyPossession

▸ **generateProofOfKeyPossession**(`account`: Address, `signer`: Address): *Promise‹object›*

*Defined in [contractkit/src/wrappers/Accounts.ts:284](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Accounts.ts#L284)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | Address |
`signer` | Address |

**Returns:** *Promise‹object›*

___

###  generateProofOfKeyPossessionLocally

▸ **generateProofOfKeyPossessionLocally**(`account`: Address, `signer`: Address, `privateKey`: string): *Promise‹object›*

*Defined in [contractkit/src/wrappers/Accounts.ts:292](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Accounts.ts#L292)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | Address |
`signer` | Address |
`privateKey` | string |

**Returns:** *Promise‹object›*

___

###  getAccountSummary

▸ **getAccountSummary**(`account`: string): *Promise‹AccountSummary›*

*Defined in [contractkit/src/wrappers/Accounts.ts:128](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Accounts.ts#L128)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | string |

**Returns:** *Promise‹AccountSummary›*

___

###  getCurrentSigners

▸ **getCurrentSigners**(`address`: string): *Promise‹string[]›*

*Defined in [contractkit/src/wrappers/Accounts.ts:120](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Accounts.ts#L120)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *Promise‹string[]›*

___

###  getName

▸ **getName**(`account`: Address, `blockNumber?`: undefined | number): *Promise‹string›*

*Defined in [contractkit/src/wrappers/Accounts.ts:301](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Accounts.ts#L301)*

Returns the set name for the account

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`account` | Address | Account |
`blockNumber?` | undefined &#124; number | Height of result, defaults to tip.  |

**Returns:** *Promise‹string›*

___

###  getPastEvents

▸ **getPastEvents**(`event`: Events‹Accounts›, `options`: PastEventOptions): *Promise‹EventLog[]›*

*Inherited from [BaseWrapper](_wrappers_basewrapper_.basewrapper.md).[getPastEvents](_wrappers_basewrapper_.basewrapper.md#getpastevents)*

*Defined in [contractkit/src/wrappers/BaseWrapper.ts:35](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/BaseWrapper.ts#L35)*

Contract getPastEvents

**Parameters:**

Name | Type |
------ | ------ |
`event` | Events‹Accounts› |
`options` | PastEventOptions |

**Returns:** *Promise‹EventLog[]›*

___

###  parseSignatureOfAddress

▸ **parseSignatureOfAddress**(`address`: Address, `signer`: string, `signature`: string): *object*

*Defined in [contractkit/src/wrappers/Accounts.ts:415](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Accounts.ts#L415)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | Address |
`signer` | string |
`signature` | string |

**Returns:** *object*

* **r**: *string*

* **s**: *string*

* **v**: *number*

___

###  setAccount

▸ **setAccount**(`name`: string, `dataEncryptionKey`: string, `walletAddress`: Address, `proofOfPossession`: Signature | null): *CeloTransactionObject‹void›*

*Defined in [contractkit/src/wrappers/Accounts.ts:342](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Accounts.ts#L342)*

Convenience Setter for the dataEncryptionKey and wallet address for an account

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`name` | string | - | A string to set as the name of the account |
`dataEncryptionKey` | string | - | secp256k1 public key for data encryption. Preferably compressed. |
`walletAddress` | Address | - | The wallet address to set for the account |
`proofOfPossession` | Signature &#124; null | null | Signature from the wallet address key over the sender's address  |

**Returns:** *CeloTransactionObject‹void›*

___

###  setWalletAddress

▸ **setWalletAddress**(`walletAddress`: Address, `proofOfPossession`: Signature | null): *CeloTransactionObject‹void›*

*Defined in [contractkit/src/wrappers/Accounts.ts:393](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Accounts.ts#L393)*

Sets the wallet address for the account

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`walletAddress` | Address | - |
`proofOfPossession` | Signature &#124; null | null |

**Returns:** *CeloTransactionObject‹void›*
