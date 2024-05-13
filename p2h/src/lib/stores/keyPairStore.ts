import { writable } from 'svelte/store';

import KeyPair from '$lib/models/KeyPair';

function createKeyPairStore() {
	const { subscribe, set } = writable<KeyPair | null>();

	return {
		subscribe,
		generate: () => set(new KeyPair()),
		generateFromHex: (privateKeyHex: string) => set(new KeyPair(privateKeyHex)),
		clear: () => set(null)
	};
}

export const keyPairStore = createKeyPairStore();
