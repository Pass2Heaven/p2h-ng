# Pass2Heaven Ethereum contracts

## Prerequisites

Install required dependencies.

```
npm install
```

## Compiling contracts

```
npm run compile
```

## Testing contracts

```
npm run test
```

## Deploying contracts

Set environment variables for Infura API key (Alchemy should work too) and account private key in the corresponding network.

```
npx hardhat vars set INFURA_API_KEY
npx hardhat vars set SEPOLIA_PRIVATE_KEY
```

For localhost deployment, start the node.

```
npx hardhat node
```

### Deploying contracts individually

Deploy the storage contract.

```
npx hardhat ignition deploy ignition/modules/WillStorage.ts --network <NETWORK>
```

> Where `network` is the desired network (e.g., `localhost`, `sepolia`). Omit to deploy to in-process instance.

Deploy the manager contract.

```
HARDHAT_VAR_WILL_STORAGE_ADDRESS=WILL_STORAGE_ADDRESS npx hardhat ignition deploy ./ignition/modules/WillManager.ts --network <NETWORK>
```

After deploying the manager, you must set its address in the storage contract. There are several ways to do that:

- Remix IDE (compile the contract in Remix and attach to thea deployed instance)
- Deployment script (see below)
- Hardhat Console

```
npx hardhat console --network <NETWORK>
const WillStorage = await ethers.getContractFactory('WillStorage');
const willStorage = await WillStorage.attach('ADDRESS')
```

More info about using Console [here](https://docs.openzeppelin.com/learn/deploying-and-interacting#interacting-from-the-console).

### Deploying contracts via script

```
npx hardhat run scripts/deploy.ts --network <NETWORK>
```

The script deploys both contracts and sets the manager address.
