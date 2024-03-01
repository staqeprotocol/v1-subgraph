import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
import { PoolEdited } from "../generated/schema"
import { PoolEdited as PoolEditedEvent } from "../generated/Staqe/Staqe"
import { handlePoolEdited } from "../src/staqe"
import { createPoolEditedEvent } from "./staqe-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let poolId = BigInt.fromI32(234)
    let metadata = Bytes.fromI32(1234567890)
    let newPoolEditedEvent = createPoolEditedEvent(poolId, metadata)
    handlePoolEdited(newPoolEditedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("PoolEdited created and stored", () => {
    assert.entityCount("PoolEdited", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "PoolEdited",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "poolId",
      "234"
    )
    assert.fieldEquals(
      "PoolEdited",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "metadata",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
