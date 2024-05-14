import { activeAccount } from '$lib/stores/activeAccount';

import type { EIP6963ProviderDetail } from 'mipd';

async function handleConnect(providerWithInfo: EIP6963ProviderDetail) {
	const accounts = await providerWithInfo.provider.request({
		method: 'eth_requestAccounts'
	});
	const chainId = await providerWithInfo.provider.request({
		method: 'eth_chainId'
	});

	// TODO: Add ability to select account
	activeAccount.set({
		account: accounts?.[0],
		chainId: formatChainAsNum(chainId as string)
	});
}

const formatChainAsNum = (chainIdHex: string) => {
	const chainIdNum = parseInt(chainIdHex);
	return chainIdNum;
};

async function handleDisconnect(providerWithInfo: EIP6963ProviderDetail) {
	await providerWithInfo.provider.request({
		method: 'wallet_revokePermissions',
		params: [
			{
				eth_accounts: {}
			}
		]
	});
	activeAccount.set(undefined);
}

export { handleConnect, handleDisconnect };
