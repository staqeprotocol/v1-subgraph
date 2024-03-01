import {
  PoolEdited as PoolEditedEvent,
  PoolLaunched as PoolLaunchedEvent,
  RewardAdded as RewardAddedEvent,
  RewardClaimed as RewardClaimedEvent,
  StakeCreated as StakeCreatedEvent,
  StakeWithdrawn as StakeWithdrawnEvent
} from "../generated/Staqe/Staqe"
import {
  PoolEdited,
  PoolLaunched,
  RewardAdded,
  RewardClaimed,
  StakeCreated,
  StakeWithdrawn
} from "../generated/schema"

export function handlePoolEdited(event: PoolEditedEvent): void {
  let entity = new PoolEdited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.metadata = event.params.metadata

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePoolLaunched(event: PoolLaunchedEvent): void {
  let entity = new PoolLaunched(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.stakeERC20 = event.params.stakeERC20
  entity.stakeERC721 = event.params.stakeERC721
  entity.rewardToken = event.params.rewardToken
  entity.rewarder = event.params.rewarder
  entity.metadata = event.params.metadata

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardAdded(event: RewardAddedEvent): void {
  let entity = new RewardAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.rewardId = event.params.rewardId
  entity.rewardToken = event.params.rewardToken
  entity.rewardAmount = event.params.rewardAmount
  entity.totalStakedERC20 = event.params.totalStakedERC20
  entity.totalStakedERC721 = event.params.totalStakedERC721
  entity.isForERC721Stakers = event.params.isForERC721Stakers
  entity.claimAfterBlock = event.params.claimAfterBlock

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardClaimed(event: RewardClaimedEvent): void {
  let entity = new RewardClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.claimant = event.params.claimant
  entity.poolId = event.params.poolId
  entity.rewardId = event.params.rewardId
  entity.rewardToken = event.params.rewardToken
  entity.rewardAmount = event.params.rewardAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStakeCreated(event: StakeCreatedEvent): void {
  let entity = new StakeCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.staker = event.params.staker
  entity.poolId = event.params.poolId
  entity.stakeId = event.params.stakeId
  entity.stakeAmountERC20 = event.params.stakeAmountERC20
  entity.stakeAmountERC721 = event.params.stakeAmountERC721

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStakeWithdrawn(event: StakeWithdrawnEvent): void {
  let entity = new StakeWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.staker = event.params.staker
  entity.poolId = event.params.poolId
  entity.stakeAmountERC20 = event.params.stakeAmountERC20
  entity.stakeAmountERC721 = event.params.stakeAmountERC721

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
