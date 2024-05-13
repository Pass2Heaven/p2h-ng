<script lang="ts">
	import { keyPairStore } from '$lib/stores/keyPairStore';
	import Button from './ui/button/button.svelte';

	import CardContent from './ui/card/card-content.svelte';
	import CardHeader from './ui/card/card-header.svelte';
	import CardTitle from './ui/card/card-title.svelte';
	import Card from './ui/card/card.svelte';
	import Input from './ui/input/input.svelte';
	import Label from './ui/label/label.svelte';
	import Textarea from './ui/textarea/textarea.svelte';
</script>

<Card>
	<CardHeader>
		<CardTitle>Send will</CardTitle>
	</CardHeader>
	<CardContent class="flex flex-col gap-4">
		<Label for="willText" />
		<Textarea id="willText" name="willText" placeholder="Please, treat this inheritance well..." />
		<Label for="senderPrivateKey">Your private key</Label>
		<Input
			id="senderPrivateKey"
			name="senderPrivateKey"
			value={$keyPairStore?.privateKeyHex()}
			disabled
		/>
		<Label for="recipientPublicKey">Recipient's public key</Label>
		<Input id="recipientPublicKey" name="recipientPublicKey" />
		<Button disabled>Send</Button>
	</CardContent>
</Card>
