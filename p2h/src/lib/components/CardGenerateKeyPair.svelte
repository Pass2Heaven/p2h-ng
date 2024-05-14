<script lang="ts">
	import { exportKeyPairToFile } from '$lib/utils/crypto';

	import KeyPair from '$lib/models/KeyPair';

	import Button from './ui/button/button.svelte';
	import CardContent from './ui/card/card-content.svelte';
	import CardDescription from './ui/card/card-description.svelte';
	import CardFooter from './ui/card/card-footer.svelte';
	import CardHeader from './ui/card/card-header.svelte';
	import CardTitle from './ui/card/card-title.svelte';
	import Card from './ui/card/card.svelte';
	import Input from './ui/input/input.svelte';
	import Label from './ui/label/label.svelte';
	import Copy from 'lucide-svelte/icons/copy';

	let keyPair: KeyPair | null;

	function generateKeyPair() {
		keyPair = new KeyPair();
	}

	function exportKeyPair() {
		exportKeyPairToFile(keyPair as KeyPair);
	}

	function clearKeyPair() {
		keyPair = null;
	}

	function privateKeyToClipboard() {
		navigator.clipboard.writeText(keyPair!.privateKeyHex());
	}
</script>

<Card>
	<CardHeader>
		<CardTitle>Generate key pair</CardTitle>
		<CardDescription>Be aware! Keys are erased when you restart the page.</CardDescription>
	</CardHeader>
	<CardContent class="grid gap-4">
		<Button on:click={generateKeyPair}>Generate</Button>

		<Label for="generatedPrivateKey">Private key</Label>
		<div class="flex gap-2">
			<Input value={keyPair?.privateKeyHex()} id="generatedPrivateKey" disabled />
			<Button
				variant="outline"
				size="icon"
				class="w-12"
				on:click={privateKeyToClipboard}
				disabled={!keyPair}><Copy class="h-4 w-4" /></Button
			>
		</div>
		<Label for="generatedPublicKey">Public key</Label>
		<Input value={keyPair?.publicKeyHex()} id="generatedPublicKey" disabled />
	</CardContent>
	<CardFooter class="grid grid-cols-2 gap-4">
		<Button on:click={exportKeyPair} variant="secondary" disabled={!keyPair}>Export</Button>
		<Button on:click={clearKeyPair} variant="outline" disabled={!keyPair}>Clear</Button>
	</CardFooter>
</Card>
