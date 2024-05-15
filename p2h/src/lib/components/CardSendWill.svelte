<script lang="ts">
	import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import { willFormSchema, type WillFormSchema } from '$lib/models/Form';

	import CardContent from './ui/card/card-content.svelte';
	import CardHeader from './ui/card/card-header.svelte';
	import CardTitle from './ui/card/card-title.svelte';
	import Card from './ui/card/card.svelte';
	import * as Form from './ui/form';
	import { Input } from './ui/input';
	import { Textarea } from './ui/textarea';

	export let data: SuperValidated<Infer<WillFormSchema>>;

	const form = superForm(data, {
		validators: zodClient(willFormSchema)
	});

	const { form: formData, enhance } = form;
</script>

<Card>
	<CardHeader>
		<CardTitle>Send will</CardTitle>
	</CardHeader>
	<CardContent class="flex flex-col gap-4">
		<form method="POST" use:enhance class="space-y-4">
			<Form.Field {form} name="contents">
				<Form.Control let:attrs>
					<Form.Label>Will contents</Form.Label>
					<Textarea {...attrs} bind:value={$formData.contents} />
				</Form.Control>
				<Form.Description
					>The text of the inheritance that will be encrypted and stored.</Form.Description
				>
			</Form.Field>
			<Form.Field {form} name="senderPrivateKey">
				<Form.Control let:attrs>
					<Form.Label>Your private key</Form.Label>
					<Input {...attrs} bind:value={$formData.senderPrivateKey} />
					<Form.Description>The private key you've generated before.</Form.Description>
				</Form.Control>
			</Form.Field>
			<Form.Field {form} name="recipientPublicKey">
				<Form.Control let:attrs>
					<Form.Label>Recipient's public key</Form.Label>
					<Input {...attrs} bind:value={$formData.recipientPublicKey} />
					<Form.Description>Public key of the will recipient.</Form.Description>
				</Form.Control>
			</Form.Field>
			<Form.Button>Submit</Form.Button>
		</form>
	</CardContent>
</Card>
