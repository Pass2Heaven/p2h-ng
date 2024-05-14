import { ignition } from "hardhat";

import WillManager from "../ignition/modules/WillManager";
import WillStorage from "../ignition/modules/WillStorage";

import { WillStorage as TWillStorage } from "../typechain-types";

export default async function deploy() {
  const { willStorage } = await ignition.deploy(WillStorage);
  const { willManager } = await ignition.deploy(WillManager, {
    parameters: {
      WillManager: {
        willStorage: await willStorage.getAddress(),
      },
    },
  });
  console.log(`WillStorage address: ${await willStorage.getAddress()}`);
  console.log(`WillManager address: ${await willManager.getAddress()}`);
  const willStorageInstance = willStorage.attach(
    await willStorage.getAddress()
  ) as TWillStorage;

  console.log(
    await willStorageInstance.upgradeVersion(await willManager.getAddress())
  );
}

deploy().catch((error) => {
  console.error(error);
});
