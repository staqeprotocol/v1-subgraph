import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
import {
  PoolEdited,
  PoolLaunched,
  RewardAdded,
  RewardClaimed,
  StakeCreated,
  StakeWithdrawn
} from "../generated/Staqe/Staqe"

export function createPoolEditedEvent(
  poolId: BigInt,
  metadata: Bytes
): PoolEdited {
  let poolEditedEvent = changetype<PoolEdited>(newMockEvent())

  poolEditedEvent.parameters = new Array()

  poolEditedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  poolEditedEvent.parameters.push(
    new ethereum.EventParam("metadata", ethereum.Value.fromFixedBytes(metadata))
  )

  return poolEditedEvent
}

export function createPoolLaunchedEvent(
  poolId: BigInt,
  stakeERC20: Address,
  stakeERC721: Address,
  rewardToken: Address,
  rewarder: Address,
  metadata: Bytes
): PoolLaunched {
  let poolLaunchedEvent = changetype<PoolLaunched>(newMockEvent())

  poolLaunchedEvent.parameters = new Array()

  poolLaunchedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  poolLaunchedEvent.parameters.push(
    new ethereum.EventParam(
      "stakeERC20",
      ethereum.Value.fromAddress(stakeERC20)
    )
  )
  poolLaunchedEvent.parameters.push(
    new ethereum.EventParam(
      "stakeERC721",
      ethereum.Value.fromAddress(stakeERC721)
    )
  )
  poolLaunchedEvent.parameters.push(
    new ethereum.EventParam(
      "rewardToken",
      ethereum.Value.fromAddress(rewardToken)
    )
  )
  poolLaunchedEvent.parameters.push(
    new ethereum.EventParam("rewarder", ethereum.Value.fromAddress(rewarder))
  )
  poolLaunchedEvent.parameters.push(
    new ethereum.EventParam("metadata", ethereum.Value.fromFixedBytes(metadata))
  )

  return poolLaunchedEvent
}

export function createRewardAddedEvent(
  poolId: BigInt,
  rewardId: BigInt,
  rewardToken: Address,
  rewardAmount: BigInt,
  totalStakedERC20: BigInt,
  totalStakedERC721: BigInt,
  isForERC721Stakers: boolean,
  claimAfterBlock: BigInt
): RewardAdded {
  let rewardAddedEvent = changetype<RewardAdded>(newMockEvent())

  rewardAddedEvent.parameters = new Array()

  rewardAddedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  rewardAddedEvent.parameters.push(
    new ethereum.EventParam(
      "rewardId",
      ethereum.Value.fromUnsignedBigInt(rewardId)
    )
  )
  rewardAddedEvent.parameters.push(
    new ethereum.EventParam(
      "rewardToken",
      ethereum.Value.fromAddress(rewardToken)
    )
  )
  rewardAddedEvent.parameters.push(
    new ethereum.EventParam(
      "rewardAmount",
      ethereum.Value.fromUnsignedBigInt(rewardAmount)
    )
  )
  rewardAddedEvent.parameters.push(
    new ethereum.EventParam(
      "totalStakedERC20",
      ethereum.Value.fromUnsignedBigInt(totalStakedERC20)
    )
  )
  rewardAddedEvent.parameters.push(
    new ethereum.EventParam(
      "totalStakedERC721",
      ethereum.Value.fromUnsignedBigInt(totalStakedERC721)
    )
  )
  rewardAddedEvent.parameters.push(
    new ethereum.EventParam(
      "isForERC721Stakers",
      ethereum.Value.fromBoolean(isForERC721Stakers)
    )
  )
  rewardAddedEvent.parameters.push(
    new ethereum.EventParam(
      "claimAfterBlock",
      ethereum.Value.fromUnsignedBigInt(claimAfterBlock)
    )
  )

  return rewardAddedEvent
}

export function createRewardClaimedEvent(
  claimant: Address,
  poolId: BigInt,
  rewardId: BigInt,
  rewardToken: Address,
  rewardAmount: BigInt
): RewardClaimed {
  let rewardClaimedEvent = changetype<RewardClaimed>(newMockEvent())

  rewardClaimedEvent.parameters = new Array()

  rewardClaimedEvent.parameters.push(
    new ethereum.EventParam("claimant", ethereum.Value.fromAddress(claimant))
  )
  rewardClaimedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  rewardClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "rewardId",
      ethereum.Value.fromUnsignedBigInt(rewardId)
    )
  )
  rewardClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "rewardToken",
      ethereum.Value.fromAddress(rewardToken)
    )
  )
  rewardClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "rewardAmount",
      ethereum.Value.fromUnsignedBigInt(rewardAmount)
    )
  )

  return rewardClaimedEvent
}

export function createStakeCreatedEvent(
  staker: Address,
  poolId: BigInt,
  stakeId: BigInt,
  stakeAmountERC20: BigInt,
  stakeAmountERC721: BigInt
): StakeCreated {
  let stakeCreatedEvent = changetype<StakeCreated>(newMockEvent())

  stakeCreatedEvent.parameters = new Array()

  stakeCreatedEvent.parameters.push(
    new ethereum.EventParam("staker", ethereum.Value.fromAddress(staker))
  )
  stakeCreatedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  stakeCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "stakeId",
      ethereum.Value.fromUnsignedBigInt(stakeId)
    )
  )
  stakeCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "stakeAmountERC20",
      ethereum.Value.fromUnsignedBigInt(stakeAmountERC20)
    )
  )
  stakeCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "stakeAmountERC721",
      ethereum.Value.fromUnsignedBigInt(stakeAmountERC721)
    )
  )

  return stakeCreatedEvent
}

export function createStakeWithdrawnEvent(
  staker: Address,
  poolId: BigInt,
  stakeAmountERC20: BigInt,
  stakeAmountERC721: BigInt
): StakeWithdrawn {
  let stakeWithdrawnEvent = changetype<StakeWithdrawn>(newMockEvent())

  stakeWithdrawnEvent.parameters = new Array()

  stakeWithdrawnEvent.parameters.push(
    new ethereum.EventParam("staker", ethereum.Value.fromAddress(staker))
  )
  stakeWithdrawnEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  stakeWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "stakeAmountERC20",
      ethereum.Value.fromUnsignedBigInt(stakeAmountERC20)
    )
  )
  stakeWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "stakeAmountERC721",
      ethereum.Value.fromUnsignedBigInt(stakeAmountERC721)
    )
  )

  return stakeWithdrawnEvent
}
