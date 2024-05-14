<script lang="ts">
	import CardGenerateKeypair from '$lib/components/CardGenerateKeyPair.svelte';
	import CardImportKeyPair from '$lib/components/CardImportKeyPair.svelte';
	import CardSendWill from '$lib/components/CardSendWill.svelte';
</script>

<div class="grid gap-4">
	<div class="grid gap-4 md:grid-cols-2">
		<CardGenerateKeypair />
		<CardImportKeyPair />
	</div>
	<div class="">
		<CardSendWill />
	</div>
</div>
