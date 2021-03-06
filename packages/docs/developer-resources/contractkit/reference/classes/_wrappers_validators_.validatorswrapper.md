# Class: ValidatorsWrapper

Contract for voting for validators and managing validator groups.

## Hierarchy

* [BaseWrapper](_wrappers_basewrapper_.basewrapper.md)‹Validators›

  ↳ **ValidatorsWrapper**

## Index

### Constructors

* [constructor](_wrappers_validators_.validatorswrapper.md#constructor)

### Properties

* [affiliate](_wrappers_validators_.validatorswrapper.md#affiliate)
* [deaffiliate](_wrappers_validators_.validatorswrapper.md#deaffiliate)
* [eventTypes](_wrappers_validators_.validatorswrapper.md#eventtypes)
* [events](_wrappers_validators_.validatorswrapper.md#events)
* [forceDeaffiliateIfValidator](_wrappers_validators_.validatorswrapper.md#forcedeaffiliateifvalidator)
* [getAccountLockedGoldRequirement](_wrappers_validators_.validatorswrapper.md#getaccountlockedgoldrequirement)
* [getCommissionUpdateDelay](_wrappers_validators_.validatorswrapper.md#getcommissionupdatedelay)
* [getEpochNumber](_wrappers_validators_.validatorswrapper.md#getepochnumber)
* [getEpochSize](_wrappers_validators_.validatorswrapper.md#getepochsize)
* [getRegisteredValidatorGroupsAddresses](_wrappers_validators_.validatorswrapper.md#getregisteredvalidatorgroupsaddresses)
* [getSlashingMultiplierResetPeriod](_wrappers_validators_.validatorswrapper.md#getslashingmultiplierresetperiod)
* [getValidatorGroupSize](_wrappers_validators_.validatorswrapper.md#getvalidatorgroupsize)
* [getValidatorMembershipHistory](_wrappers_validators_.validatorswrapper.md#getvalidatormembershiphistory)
* [getValidatorMembershipHistoryExtraData](_wrappers_validators_.validatorswrapper.md#getvalidatormembershiphistoryextradata)
* [isValidator](_wrappers_validators_.validatorswrapper.md#isvalidator)
* [isValidatorGroup](_wrappers_validators_.validatorswrapper.md#isvalidatorgroup)
* [methodIds](_wrappers_validators_.validatorswrapper.md#methodids)
* [registerValidator](_wrappers_validators_.validatorswrapper.md#registervalidator)
* [removeMember](_wrappers_validators_.validatorswrapper.md#removemember)
* [resetSlashingMultiplier](_wrappers_validators_.validatorswrapper.md#resetslashingmultiplier)
* [setNextCommissionUpdate](_wrappers_validators_.validatorswrapper.md#setnextcommissionupdate)
* [updateBlsPublicKey](_wrappers_validators_.validatorswrapper.md#updateblspublickey)
* [updateCommission](_wrappers_validators_.validatorswrapper.md#updatecommission)

### Accessors

* [address](_wrappers_validators_.validatorswrapper.md#address)

### Methods

* [addMember](_wrappers_validators_.validatorswrapper.md#addmember)
* [currentSignerSet](_wrappers_validators_.validatorswrapper.md#currentsignerset)
* [currentValidatorAccountsSet](_wrappers_validators_.validatorswrapper.md#currentvalidatoraccountsset)
* [deregisterValidator](_wrappers_validators_.validatorswrapper.md#deregistervalidator)
* [deregisterValidatorGroup](_wrappers_validators_.validatorswrapper.md#deregistervalidatorgroup)
* [findValidatorMembershipHistoryIndex](_wrappers_validators_.validatorswrapper.md#findvalidatormembershiphistoryindex)
* [getConfig](_wrappers_validators_.validatorswrapper.md#getconfig)
* [getGroupLockedGoldRequirements](_wrappers_validators_.validatorswrapper.md#getgrouplockedgoldrequirements)
* [getHumanReadableConfig](_wrappers_validators_.validatorswrapper.md#gethumanreadableconfig)
* [getPastEvents](_wrappers_validators_.validatorswrapper.md#getpastevents)
* [getRegisteredValidatorGroups](_wrappers_validators_.validatorswrapper.md#getregisteredvalidatorgroups)
* [getRegisteredValidators](_wrappers_validators_.validatorswrapper.md#getregisteredvalidators)
* [getRegisteredValidatorsAddresses](_wrappers_validators_.validatorswrapper.md#getregisteredvalidatorsaddresses)
* [getValidator](_wrappers_validators_.validatorswrapper.md#getvalidator)
* [getValidatorFromSigner](_wrappers_validators_.validatorswrapper.md#getvalidatorfromsigner)
* [getValidatorGroup](_wrappers_validators_.validatorswrapper.md#getvalidatorgroup)
* [getValidatorLockedGoldRequirements](_wrappers_validators_.validatorswrapper.md#getvalidatorlockedgoldrequirements)
* [getValidatorMembershipHistoryIndex](_wrappers_validators_.validatorswrapper.md#getvalidatormembershiphistoryindex)
* [getValidatorRewards](_wrappers_validators_.validatorswrapper.md#getvalidatorrewards)
* [meetsValidatorBalanceRequirements](_wrappers_validators_.validatorswrapper.md#meetsvalidatorbalancerequirements)
* [meetsValidatorGroupBalanceRequirements](_wrappers_validators_.validatorswrapper.md#meetsvalidatorgroupbalancerequirements)
* [registerValidatorGroup](_wrappers_validators_.validatorswrapper.md#registervalidatorgroup)
* [reorderMember](_wrappers_validators_.validatorswrapper.md#reordermember)
* [signerToAccount](_wrappers_validators_.validatorswrapper.md#signertoaccount)
* [validatorSignerToAccount](_wrappers_validators_.validatorswrapper.md#validatorsignertoaccount)

## Constructors

###  constructor

\+ **new ValidatorsWrapper**(`kit`: [ContractKit](_kit_.contractkit.md), `contract`: Validators): *[ValidatorsWrapper](_wrappers_validators_.validatorswrapper.md)*

*Inherited from [BaseWrapper](_wrappers_basewrapper_.basewrapper.md).[constructor](_wrappers_basewrapper_.basewrapper.md#constructor)*

*Defined in [contractkit/src/wrappers/BaseWrapper.ts:26](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/BaseWrapper.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`kit` | [ContractKit](_kit_.contractkit.md) |
`contract` | Validators |

**Returns:** *[ValidatorsWrapper](_wrappers_validators_.validatorswrapper.md)*

## Properties

###  affiliate

• **affiliate**: *function* = proxySend(
    this.kit,
    this.contract.methods.affiliate
  )

*Defined in [contractkit/src/wrappers/Validators.ts:477](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L477)*

Affiliates a validator with a group, allowing it to be added as a member.
De-affiliates with the previously affiliated group if present.

**`param`** The validator group with which to affiliate.

#### Type declaration:

▸ (`group`: Address): *CeloTransactionObject‹boolean›*

**Parameters:**

Name | Type |
------ | ------ |
`group` | Address |

___

###  deaffiliate

• **deaffiliate**: *function* = proxySend(this.kit, this.contract.methods.deaffiliate)

*Defined in [contractkit/src/wrappers/Validators.ts:487](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L487)*

De-affiliates a validator, removing it from the group for which it is a member.
Fails if the account is not a validator with non-zero affiliation.

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

• **events**: *Validators["events"]* = this.contract.events

*Inherited from [BaseWrapper](_wrappers_basewrapper_.basewrapper.md).[events](_wrappers_basewrapper_.basewrapper.md#events)*

*Defined in [contractkit/src/wrappers/BaseWrapper.ts:39](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/BaseWrapper.ts#L39)*

___

###  forceDeaffiliateIfValidator

• **forceDeaffiliateIfValidator**: *function* = proxySend(
    this.kit,
    this.contract.methods.forceDeaffiliateIfValidator
  )

*Defined in [contractkit/src/wrappers/Validators.ts:493](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L493)*

Removes a validator from the group for which it is a member.

**`param`** The validator to deaffiliate from their affiliated validator group.

#### Type declaration:

▸ (...`args`: InputArgs): *CeloTransactionObject‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  getAccountLockedGoldRequirement

• **getAccountLockedGoldRequirement**: *function* = proxyCall(
    this.contract.methods.getAccountLockedGoldRequirement,
    undefined,
    valueToBigNumber
  )

*Defined in [contractkit/src/wrappers/Validators.ts:128](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L128)*

Returns the Locked Gold requirements for specific account.

**`returns`** The Locked Gold requirements for a specific account.

#### Type declaration:

▸ (...`args`: InputArgs): *Promise‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  getCommissionUpdateDelay

• **getCommissionUpdateDelay**: *function* = proxyCall(
    this.contract.methods.commissionUpdateDelay,
    undefined,
    valueToBigNumber
  )

*Defined in [contractkit/src/wrappers/Validators.ts:146](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L146)*

Returns the update delay, in blocks, for the group commission.

#### Type declaration:

▸ (...`args`: InputArgs): *Promise‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  getEpochNumber

• **getEpochNumber**: *function* = proxyCall(this.contract.methods.getEpochNumber, undefined, valueToBigNumber)

*Defined in [contractkit/src/wrappers/Validators.ts:413](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L413)*

Registers a validator unaffiliated with any validator group.

Fails if the account is already a validator or validator group.

**`param`** The address that the validator is using for consensus, should match
  the validator signer.

**`param`** The ECDSA public key that the validator is using for consensus. 64 bytes.

**`param`** The BLS public key that the validator is using for consensus, should pass proof
  of possession. 48 bytes.

**`param`** The BLS public key proof-of-possession, which consists of a signature on the
  account address. 96 bytes.

#### Type declaration:

▸ (...`args`: InputArgs): *Promise‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  getEpochSize

• **getEpochSize**: *function* = proxyCall(this.contract.methods.getEpochSize, undefined, valueToBigNumber)

*Defined in [contractkit/src/wrappers/Validators.ts:415](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L415)*

#### Type declaration:

▸ (...`args`: InputArgs): *Promise‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  getRegisteredValidatorGroupsAddresses

• **getRegisteredValidatorGroupsAddresses**: *function* = proxyCall(
    this.contract.methods.getRegisteredValidatorGroups
  )

*Defined in [contractkit/src/wrappers/Validators.ts:383](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L383)*

Get list of registered validator group addresses

#### Type declaration:

▸ (): *Promise‹Address[]›*

___

###  getSlashingMultiplierResetPeriod

• **getSlashingMultiplierResetPeriod**: *function* = proxyCall(
    this.contract.methods.slashingMultiplierResetPeriod,
    undefined,
    valueToBigNumber
  )

*Defined in [contractkit/src/wrappers/Validators.ts:137](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L137)*

Returns the reset period, in seconds, for slashing multiplier.

#### Type declaration:

▸ (...`args`: InputArgs): *Promise‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  getValidatorGroupSize

• **getValidatorGroupSize**: *function* = proxyCall(
    this.contract.methods.getGroupNumMembers,
    undefined,
    valueToInt
  )

*Defined in [contractkit/src/wrappers/Validators.ts:370](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L370)*

Get the size (amount of members) of a ValidatorGroup

#### Type declaration:

▸ (`group`: Address): *Promise‹number›*

**Parameters:**

Name | Type |
------ | ------ |
`group` | Address |

___

###  getValidatorMembershipHistory

• **getValidatorMembershipHistory**: *function* = proxyCall(
    this.contract.methods.getMembershipHistory,
    undefined,
    (res) =>
      zip((epoch, group): GroupMembership => ({ epoch: valueToInt(epoch), group }), res[0], res[1])
  )

*Defined in [contractkit/src/wrappers/Validators.ts:349](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L349)*

Returns the Validator's group membership history

**`param`** The validator whose membership history to return.

**`returns`** The group membership history of a validator.

#### Type declaration:

▸ (`validator`: Address): *Promise‹[GroupMembership](../interfaces/_wrappers_validators_.groupmembership.md)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`validator` | Address |

___

###  getValidatorMembershipHistoryExtraData

• **getValidatorMembershipHistoryExtraData**: *function* = proxyCall(
    this.contract.methods.getMembershipHistory,
    undefined,
    (res) => ({ lastRemovedFromGroupTimestamp: valueToInt(res[2]), tail: valueToInt(res[3]) })
  )

*Defined in [contractkit/src/wrappers/Validators.ts:361](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L361)*

Returns extra data from the Validator's group membership history

**`param`** The validator whose membership history to return.

**`returns`** The group membership history of a validator.

#### Type declaration:

▸ (`validator`: Address): *Promise‹[MembershipHistoryExtraData](../interfaces/_wrappers_validators_.membershiphistoryextradata.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`validator` | Address |

___

###  isValidator

• **isValidator**: *function* = proxyCall(this.contract.methods.isValidator)

*Defined in [contractkit/src/wrappers/Validators.ts:241](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L241)*

Returns whether a particular account has a registered validator.

**`param`** The account.

**`returns`** Whether a particular address is a registered validator.

#### Type declaration:

▸ (...`args`: InputArgs): *Promise‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  isValidatorGroup

• **isValidatorGroup**: *function* = proxyCall(this.contract.methods.isValidatorGroup)

*Defined in [contractkit/src/wrappers/Validators.ts:248](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L248)*

Returns whether a particular account has a registered validator group.

**`param`** The account.

**`returns`** Whether a particular address is a registered validator group.

#### Type declaration:

▸ (...`args`: InputArgs): *Promise‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

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

###  registerValidator

• **registerValidator**: *function* = proxySend(
    this.kit,
    this.contract.methods.registerValidator,
    tupleParser(stringToSolidityBytes, stringToSolidityBytes, stringToSolidityBytes)
  )

*Defined in [contractkit/src/wrappers/Validators.ts:417](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L417)*

#### Type declaration:

▸ (`ecdsaPublicKey`: string, `blsPublicKey`: string, `blsPop`: string): *CeloTransactionObject‹boolean›*

**Parameters:**

Name | Type |
------ | ------ |
`ecdsaPublicKey` | string |
`blsPublicKey` | string |
`blsPop` | string |

___

###  removeMember

• **removeMember**: *function* = proxySend(this.kit, this.contract.methods.removeMember)

*Defined in [contractkit/src/wrappers/Validators.ts:531](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L531)*

Removes a member from a ValidatorGroup
The ValidatorGroup is specified by the `from` of the tx.

**`param`** The Validator to remove from the group

#### Type declaration:

▸ (...`args`: InputArgs): *CeloTransactionObject‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  resetSlashingMultiplier

• **resetSlashingMultiplier**: *function* = proxySend(this.kit, this.contract.methods.resetSlashingMultiplier)

*Defined in [contractkit/src/wrappers/Validators.ts:502](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L502)*

Resets a group's slashing multiplier if it has been >= the reset period since
the last time the group was slashed.

#### Type declaration:

▸ (...`args`: InputArgs): *CeloTransactionObject‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  setNextCommissionUpdate

• **setNextCommissionUpdate**: *function* = proxySend(
    this.kit,
    this.contract.methods.setNextCommissionUpdate,
    tupleParser(valueToFixidityString)
  )

*Defined in [contractkit/src/wrappers/Validators.ts:86](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L86)*

Queues an update to a validator group's commission.

**`param`** Fixidity representation of the commission this group receives on epoch
  payments made to its members. Must be in the range [0, 1.0].

#### Type declaration:

▸ (`commission`: BigNumber.Value): *CeloTransactionObject‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`commission` | BigNumber.Value |

___

###  updateBlsPublicKey

• **updateBlsPublicKey**: *function* = proxySend(
    this.kit,
    this.contract.methods.updateBlsPublicKey,
    tupleParser(stringToSolidityBytes, stringToSolidityBytes)
  )

*Defined in [contractkit/src/wrappers/Validators.ts:227](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L227)*

Updates a validator's BLS key.

**`param`** The BLS public key that the validator is using for consensus, should pass proof
  of possession. 48 bytes.

**`param`** The BLS public key proof-of-possession, which consists of a signature on the
  account address. 96 bytes.

**`returns`** True upon success.

#### Type declaration:

▸ (`blsPublicKey`: string, `blsPop`: string): *CeloTransactionObject‹boolean›*

**Parameters:**

Name | Type |
------ | ------ |
`blsPublicKey` | string |
`blsPop` | string |

___

###  updateCommission

• **updateCommission**: *function* = proxySend(
    this.kit,
    this.contract.methods.updateCommission
  )

*Defined in [contractkit/src/wrappers/Validators.ts:95](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L95)*

Updates a validator group's commission based on the previously queued update

#### Type declaration:

▸ (): *CeloTransactionObject‹void›*

## Accessors

###  address

• **get address**(): *string*

*Inherited from [BaseWrapper](_wrappers_basewrapper_.basewrapper.md).[address](_wrappers_basewrapper_.basewrapper.md#address)*

*Defined in [contractkit/src/wrappers/BaseWrapper.ts:30](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/BaseWrapper.ts#L30)*

Contract address

**Returns:** *string*

## Methods

###  addMember

▸ **addMember**(`group`: Address, `validator`: Address): *Promise‹CeloTransactionObject‹boolean››*

*Defined in [contractkit/src/wrappers/Validators.ts:509](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L509)*

Adds a member to the end of a validator group's list of members.
Fails if `validator` has not set their affiliation to this account.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`group` | Address | - |
`validator` | Address | The validator to add to the group  |

**Returns:** *Promise‹CeloTransactionObject‹boolean››*

___

###  currentSignerSet

▸ **currentSignerSet**(): *Promise‹Address[]›*

*Defined in [contractkit/src/wrappers/Validators.ts:599](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L599)*

Returns the current set of validator signer addresses

**Returns:** *Promise‹Address[]›*

___

###  currentValidatorAccountsSet

▸ **currentValidatorAccountsSet**(): *Promise‹object[]›*

*Defined in [contractkit/src/wrappers/Validators.ts:609](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L609)*

Returns the current set of validator signer and account addresses

**Returns:** *Promise‹object[]›*

___

###  deregisterValidator

▸ **deregisterValidator**(`validatorAddress`: Address): *Promise‹CeloTransactionObject‹boolean››*

*Defined in [contractkit/src/wrappers/Validators.ts:431](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L431)*

De-registers a validator, removing it from the group for which it is a member.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validatorAddress` | Address | Address of the validator to deregister  |

**Returns:** *Promise‹CeloTransactionObject‹boolean››*

___

###  deregisterValidatorGroup

▸ **deregisterValidatorGroup**(`validatorGroupAddress`: Address): *Promise‹CeloTransactionObject‹boolean››*

*Defined in [contractkit/src/wrappers/Validators.ts:459](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L459)*

De-registers a validator Group

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validatorGroupAddress` | Address | Address of the validator group to deregister  |

**Returns:** *Promise‹CeloTransactionObject‹boolean››*

___

###  findValidatorMembershipHistoryIndex

▸ **findValidatorMembershipHistoryIndex**(`epoch`: number, `history`: [GroupMembership](../interfaces/_wrappers_validators_.groupmembership.md)[]): *number*

*Defined in [contractkit/src/wrappers/Validators.ts:642](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L642)*

Returns the index into `history` for `epoch`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`epoch` | number | The needle. |
`history` | [GroupMembership](../interfaces/_wrappers_validators_.groupmembership.md)[] | The haystack. |

**Returns:** *number*

Index for epoch or -1.

___

###  getConfig

▸ **getConfig**(): *Promise‹[ValidatorsConfig](../interfaces/_wrappers_validators_.validatorsconfig.md)›*

*Defined in [contractkit/src/wrappers/Validators.ts:155](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L155)*

Returns current configuration parameters.

**Returns:** *Promise‹[ValidatorsConfig](../interfaces/_wrappers_validators_.validatorsconfig.md)›*

___

###  getGroupLockedGoldRequirements

▸ **getGroupLockedGoldRequirements**(): *Promise‹[LockedGoldRequirements](../interfaces/_wrappers_validators_.lockedgoldrequirements.md)›*

*Defined in [contractkit/src/wrappers/Validators.ts:116](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L116)*

Returns the Locked Gold requirements for validator groups.

**Returns:** *Promise‹[LockedGoldRequirements](../interfaces/_wrappers_validators_.lockedgoldrequirements.md)›*

The Locked Gold requirements for validator groups.

___

###  getHumanReadableConfig

▸ **getHumanReadableConfig**(): *Promise‹object›*

*Defined in [contractkit/src/wrappers/Validators.ts:178](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L178)*

**`dev`** Returns human readable configuration of the validators contract

**Returns:** *Promise‹object›*

ValidatorsConfig object

___

###  getPastEvents

▸ **getPastEvents**(`event`: Events‹Validators›, `options`: PastEventOptions): *Promise‹EventLog[]›*

*Inherited from [BaseWrapper](_wrappers_basewrapper_.basewrapper.md).[getPastEvents](_wrappers_basewrapper_.basewrapper.md#getpastevents)*

*Defined in [contractkit/src/wrappers/BaseWrapper.ts:35](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/BaseWrapper.ts#L35)*

Contract getPastEvents

**Parameters:**

Name | Type |
------ | ------ |
`event` | Events‹Validators› |
`options` | PastEventOptions |

**Returns:** *Promise‹EventLog[]›*

___

###  getRegisteredValidatorGroups

▸ **getRegisteredValidatorGroups**(): *Promise‹[ValidatorGroup](../interfaces/_wrappers_validators_.validatorgroup.md)[]›*

*Defined in [contractkit/src/wrappers/Validators.ts:394](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L394)*

Get list of registered validator groups

**Returns:** *Promise‹[ValidatorGroup](../interfaces/_wrappers_validators_.validatorgroup.md)[]›*

___

###  getRegisteredValidators

▸ **getRegisteredValidators**(`blockNumber?`: undefined | number): *Promise‹[Validator](../interfaces/_wrappers_validators_.validator.md)[]›*

*Defined in [contractkit/src/wrappers/Validators.ts:388](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L388)*

Get list of registered validators

**Parameters:**

Name | Type |
------ | ------ |
`blockNumber?` | undefined &#124; number |

**Returns:** *Promise‹[Validator](../interfaces/_wrappers_validators_.validator.md)[]›*

___

###  getRegisteredValidatorsAddresses

▸ **getRegisteredValidatorsAddresses**(`blockNumber?`: undefined | number): *Promise‹Address[]›*

*Defined in [contractkit/src/wrappers/Validators.ts:377](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L377)*

Get list of registered validator addresses

**Parameters:**

Name | Type |
------ | ------ |
`blockNumber?` | undefined &#124; number |

**Returns:** *Promise‹Address[]›*

___

###  getValidator

▸ **getValidator**(`address`: Address, `blockNumber?`: undefined | number): *Promise‹[Validator](../interfaces/_wrappers_validators_.validator.md)›*

*Defined in [contractkit/src/wrappers/Validators.ts:276](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L276)*

Get Validator information

**Parameters:**

Name | Type |
------ | ------ |
`address` | Address |
`blockNumber?` | undefined &#124; number |

**Returns:** *Promise‹[Validator](../interfaces/_wrappers_validators_.validator.md)›*

___

###  getValidatorFromSigner

▸ **getValidatorFromSigner**(`address`: Address, `blockNumber?`: undefined | number): *Promise‹[Validator](../interfaces/_wrappers_validators_.validator.md)›*

*Defined in [contractkit/src/wrappers/Validators.ts:293](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L293)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | Address |
`blockNumber?` | undefined &#124; number |

**Returns:** *Promise‹[Validator](../interfaces/_wrappers_validators_.validator.md)›*

___

###  getValidatorGroup

▸ **getValidatorGroup**(`address`: Address, `getAffiliates`: boolean, `blockNumber?`: undefined | number): *Promise‹[ValidatorGroup](../interfaces/_wrappers_validators_.validatorgroup.md)›*

*Defined in [contractkit/src/wrappers/Validators.ts:311](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L311)*

Get ValidatorGroup information

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`address` | Address | - |
`getAffiliates` | boolean | true |
`blockNumber?` | undefined &#124; number | - |

**Returns:** *Promise‹[ValidatorGroup](../interfaces/_wrappers_validators_.validatorgroup.md)›*

___

###  getValidatorLockedGoldRequirements

▸ **getValidatorLockedGoldRequirements**(): *Promise‹[LockedGoldRequirements](../interfaces/_wrappers_validators_.lockedgoldrequirements.md)›*

*Defined in [contractkit/src/wrappers/Validators.ts:104](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L104)*

Returns the Locked Gold requirements for validators.

**Returns:** *Promise‹[LockedGoldRequirements](../interfaces/_wrappers_validators_.lockedgoldrequirements.md)›*

The Locked Gold requirements for validators.

___

###  getValidatorMembershipHistoryIndex

▸ **getValidatorMembershipHistoryIndex**(`account`: Address, `blockNumber?`: undefined | number): *Promise‹object›*

*Defined in [contractkit/src/wrappers/Validators.ts:623](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L623)*

Returns the group membership for validator account.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`account` | Address | Address of validator account to retrieve group membership for. |
`blockNumber?` | undefined &#124; number | Block number to retrieve group membership at. |

**Returns:** *Promise‹object›*

Group and membership history index for `validator`.

___

###  getValidatorRewards

▸ **getValidatorRewards**(`epochNumber`: number): *Promise‹[ValidatorReward](../interfaces/_wrappers_validators_.validatorreward.md)[]›*

*Defined in [contractkit/src/wrappers/Validators.ts:573](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L573)*

Retrieves ValidatorRewards for epochNumber.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`epochNumber` | number | The epoch to retrieve ValidatorRewards at.  |

**Returns:** *Promise‹[ValidatorReward](../interfaces/_wrappers_validators_.validatorreward.md)[]›*

___

###  meetsValidatorBalanceRequirements

▸ **meetsValidatorBalanceRequirements**(`address`: Address): *Promise‹boolean›*

*Defined in [contractkit/src/wrappers/Validators.ts:255](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L255)*

Returns whether an account meets the requirements to register a validator.

**Parameters:**

Name | Type |
------ | ------ |
`address` | Address |

**Returns:** *Promise‹boolean›*

Whether an account meets the requirements to register a validator.

___

###  meetsValidatorGroupBalanceRequirements

▸ **meetsValidatorGroupBalanceRequirements**(`address`: Address): *Promise‹boolean›*

*Defined in [contractkit/src/wrappers/Validators.ts:268](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L268)*

Returns whether an account meets the requirements to register a group.

**Parameters:**

Name | Type |
------ | ------ |
`address` | Address |

**Returns:** *Promise‹boolean›*

Whether an account meets the requirements to register a group.

___

###  registerValidatorGroup

▸ **registerValidatorGroup**(`commission`: BigNumber): *Promise‹CeloTransactionObject‹boolean››*

*Defined in [contractkit/src/wrappers/Validators.ts:448](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L448)*

Registers a validator group with no member validators.
Fails if the account is already a validator or validator group.
Fails if the account does not have sufficient weight.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`commission` | BigNumber | the commission this group receives on epoch payments made to its members.  |

**Returns:** *Promise‹CeloTransactionObject‹boolean››*

___

###  reorderMember

▸ **reorderMember**(`groupAddr`: Address, `validator`: Address, `newIndex`: number): *Promise‹CeloTransactionObject‹boolean››*

*Defined in [contractkit/src/wrappers/Validators.ts:540](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L540)*

Reorders a member within a validator group.
Fails if `validator` is not a member of the account's validator group.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`groupAddr` | Address | The validator group |
`validator` | Address | The validator to reorder. |
`newIndex` | number | New position for the validator  |

**Returns:** *Promise‹CeloTransactionObject‹boolean››*

___

###  signerToAccount

▸ **signerToAccount**(`signerAddress`: Address): *Promise‹string›*

*Defined in [contractkit/src/wrappers/Validators.ts:214](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L214)*

Returns the account associated with `signer`.

**`dev`** Fails if the `signer` is not an account or previously authorized signer.

**Parameters:**

Name | Type |
------ | ------ |
`signerAddress` | Address |

**Returns:** *Promise‹string›*

The associated account.

___

###  validatorSignerToAccount

▸ **validatorSignerToAccount**(`signerAddress`: Address): *Promise‹string›*

*Defined in [contractkit/src/wrappers/Validators.ts:203](https://github.com/medhak1/celo-monorepo/blob/master/packages/sdk/contractkit/src/wrappers/Validators.ts#L203)*

Returns the account associated with `signer`.

**`dev`** Fails if the `signer` is not an account or currently authorized validator.

**Parameters:**

Name | Type |
------ | ------ |
`signerAddress` | Address |

**Returns:** *Promise‹string›*

The associated account.
