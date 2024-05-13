<script lang="ts">
	import Button from './ui/button/button.svelte';
	import CardContent from './ui/card/card-content.svelte';
	import CardDescription from './ui/card/card-description.svelte';
	import CardHeader from './ui/card/card-header.svelte';
	import CardTitle from './ui/card/card-title.svelte';
	import Card from './ui/card/card.svelte';
	import Input from './ui/input/input.svelte';
	import Label from './ui/label/label.svelte';

	import { keyPairStore } from '$lib/stores/keyPairStore';
</script>

<Card>
	<CardHeader>
		<CardTitle>Generate key pair</CardTitle>
		<CardDescription>Be aware! Keys are erased when you restart the page.</CardDescription>
	</CardHeader>
	<CardContent class="flex flex-col gap-4">
		<Button on:click={keyPairStore.generate}>Generate</Button>

		<Label for="generatedPrivateKey">Private key</Label>
		<Input value={$keyPairStore?.privateKeyHex()} id="generatedPrivateKey" disabled />
		<Label for="generatedPublicKey">Public key</Label>
		<Input value={$keyPairStore?.publicKeyHex()} id="generatedPublicKey" disabled />
	</CardContent>
</Card>
