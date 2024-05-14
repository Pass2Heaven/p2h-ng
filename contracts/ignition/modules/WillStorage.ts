import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("WillStorage", (m) => {
  const willStorage = m.contract("WillStorage");

  return { willStorage };
});
