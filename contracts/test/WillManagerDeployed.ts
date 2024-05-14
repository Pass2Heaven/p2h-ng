import { ignition } from "hardhat";
import { expect } from "chai";

import WillStorage from "../ignition/modules/WillStorage";
import WillManager from "../ignition/modules/WillManager";

describe("WillManagerDeployed", async function () {
  it("Should deploy correctly", async function () {
    const { willStorage } = await ignition.deploy(WillStorage);
    const { willManager } = await ignition.deploy(WillManager, {
      parameters: {
        WillManager: {
          willStorage: await willStorage.getAddress(),
        },
      },
    });

    await expect(willStorage.upgradeVersion(await willManager.getAddress())).to
      .not.be.reverted;
    expect(willManager.getAddress()).to.not.be.null;
  });
});
