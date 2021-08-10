/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

interface ArbRetryableTxInterface extends ethers.utils.Interface {
  functions: {
    'cancel(bytes32)': FunctionFragment
    'getBeneficiary(bytes32)': FunctionFragment
    'getKeepalivePrice(bytes32)': FunctionFragment
    'getLifetime()': FunctionFragment
    'getSubmissionPrice(uint256)': FunctionFragment
    'getTimeout(bytes32)': FunctionFragment
    'keepalive(bytes32)': FunctionFragment
    'redeem(bytes32)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'cancel', values: [BytesLike]): string
  encodeFunctionData(
    functionFragment: 'getBeneficiary',
    values: [BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'getKeepalivePrice',
    values: [BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'getLifetime',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'getSubmissionPrice',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'getTimeout',
    values: [BytesLike]
  ): string
  encodeFunctionData(functionFragment: 'keepalive', values: [BytesLike]): string
  encodeFunctionData(functionFragment: 'redeem', values: [BytesLike]): string

  decodeFunctionResult(functionFragment: 'cancel', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'getBeneficiary',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'getKeepalivePrice',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'getLifetime', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'getSubmissionPrice',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'getTimeout', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'keepalive', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'redeem', data: BytesLike): Result

  events: {
    'Canceled(bytes32)': EventFragment
    'LifetimeExtended(bytes32,uint256)': EventFragment
    'Redeemed(bytes32)': EventFragment
    'TicketCreated(bytes32)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'Canceled'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'LifetimeExtended'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Redeemed'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'TicketCreated'): EventFragment
}

export class ArbRetryableTx extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: ArbRetryableTxInterface

  functions: {
    cancel(
      ticketId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    getBeneficiary(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>

    getKeepalivePrice(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>

    getLifetime(overrides?: CallOverrides): Promise<[BigNumber]>

    getSubmissionPrice(
      calldataSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>

    getTimeout(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    keepalive(
      ticketId: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    redeem(
      txId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>
  }

  cancel(
    ticketId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  getBeneficiary(
    ticketId: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>

  getKeepalivePrice(
    ticketId: BytesLike,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>

  getLifetime(overrides?: CallOverrides): Promise<BigNumber>

  getSubmissionPrice(
    calldataSize: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>

  getTimeout(ticketId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>

  keepalive(
    ticketId: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  redeem(
    txId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    cancel(ticketId: BytesLike, overrides?: CallOverrides): Promise<void>

    getBeneficiary(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    getKeepalivePrice(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>

    getLifetime(overrides?: CallOverrides): Promise<BigNumber>

    getSubmissionPrice(
      calldataSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>

    getTimeout(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    keepalive(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    redeem(txId: BytesLike, overrides?: CallOverrides): Promise<void>
  }

  filters: {
    Canceled(
      ticketId?: BytesLike | null
    ): TypedEventFilter<[string], { ticketId: string }>

    LifetimeExtended(
      ticketId?: BytesLike | null,
      newTimeout?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { ticketId: string; newTimeout: BigNumber }
    >

    Redeemed(
      ticketId?: BytesLike | null
    ): TypedEventFilter<[string], { ticketId: string }>

    TicketCreated(
      ticketId?: BytesLike | null
    ): TypedEventFilter<[string], { ticketId: string }>
  }

  estimateGas: {
    cancel(
      ticketId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    getBeneficiary(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getKeepalivePrice(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getLifetime(overrides?: CallOverrides): Promise<BigNumber>

    getSubmissionPrice(
      calldataSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getTimeout(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    keepalive(
      ticketId: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    redeem(
      txId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    cancel(
      ticketId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    getBeneficiary(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getKeepalivePrice(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getLifetime(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getSubmissionPrice(
      calldataSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getTimeout(
      ticketId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    keepalive(
      ticketId: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    redeem(
      txId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>
  }
}
