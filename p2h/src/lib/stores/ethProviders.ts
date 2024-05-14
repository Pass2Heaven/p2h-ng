import { readable } from 'svelte/store';

import { createStore } from 'mipd';

const store = createStore();
export const providers = readable(store.getProviders(), store.subscribe);
