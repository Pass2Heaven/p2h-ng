<script lang="ts">
	import KeyPair from '$lib/models/KeyPair';
	import { keyPairStore } from '$lib/stores/keyPairStore';

	import Button from './ui/button/button.svelte';
	import CardContent from './ui/card/card-content.svelte';
	import CardDescription from './ui/card/card-description.svelte';
	import CardFooter from './ui/card/card-footer.svelte';
	import CardHeader from './ui/card/card-header.svelte';
	import CardTitle from './ui/card/card-title.svelte';
	import Card from './ui/card/card.svelte';
	import Input from './ui/input/input.svelte';
	import Label from './ui/label/label.svelte';

	let privateKeyHex = '';

	function importKeyPair() {
		keyPairStore.generateFromHex(privateKeyHex);
	}
</script>

<Card>
	<CardHeader>
		<CardTitle>Import key pair</CardTitle>
		<CardDescription>
			Be aware! Keys are not persisted and will be ejected when you refresh the page.
		</CardDescription>
	</CardHeader>
	<CardContent class="flex flex-col gap-4">
		<Label for="importedPrivateKey">Your private key</Label>
		<Input bind:value={privateKeyHex} id="importedPrivateKey" />
		<Label for="retrievedPublicKey">Your private key</Label>
		<Input value={$keyPairStore?.publicKeyHex()} id="retrievedPublicKey" disabled />
	</CardContent>
	<CardFooter class="gap-4">
		<Button on:click={importKeyPair} class="grow basis-0">Import key</Button>
		<Button class="grow basis-0" variant={'outline'}>Eject keys</Button>
	</CardFooter>
</Card>
