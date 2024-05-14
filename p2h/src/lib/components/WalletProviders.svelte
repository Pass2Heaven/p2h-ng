<script lang="ts">
	import { handleConnect } from '$lib/utils/providers';

	import { providers } from '$lib/stores/ethProviders';
	import { activeAccount } from '$lib/stores/activeAccount';

	import Button from './ui/button/button.svelte';
	import { Select, SelectGroup, SelectInput, SelectValue } from './ui/select';
	import SelectContent from './ui/select/select-content.svelte';
	import SelectItem from './ui/select/select-item.svelte';
	import SelectLabel from './ui/select/select-label.svelte';
	import SelectTrigger from './ui/select/select-trigger.svelte';
	import Badge from './ui/badge/badge.svelte';

	let activeProviderNumber = 0;
	let activeProvider = $providers[activeProviderNumber];
</script>

{#if $providers.length > 1}
	<Select
		onSelectedChange={(v) => {
			activeProviderNumber = v.value;
		}}
	>
		<SelectTrigger>
			<SelectValue placeholder="Select wallet" />
		</SelectTrigger>
		<SelectContent>
			<SelectGroup>
				{#each $providers as provider, i}
					<SelectItem value={i} label={provider.info.name}>{provider.info.name}</SelectItem>
				{/each}
			</SelectGroup>
		</SelectContent>
	</Select>
{/if}

{#if $activeAccount !== undefined}
	<Badge variant="outline">{$activeAccount.account}</Badge>
{/if}

{#if $providers.length > 0 && $activeAccount === undefined}
	<Button on:click={() => handleConnect(activeProvider)}
		>Connect {activeProvider.info.name}
		<img src={activeProvider.info.icon} alt="Provider icon" class="ml-2 h-6 w-auto" /></Button
	>
{/if}
