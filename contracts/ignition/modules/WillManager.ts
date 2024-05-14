import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("WillManager", (m) => {
  const willManager = m.contract("WillManager", [
    m.getParameter("willStorage"),
  ]);

  return { willManager };
});
