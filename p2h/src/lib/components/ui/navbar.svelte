<script lang="ts">
	import Logo from '$lib/components/svg/logo.svelte';
</script>

<nav class="flex items-center justify-items-start">
	<div class="mr-4 max-w-[250px]"><Logo /></div>
	<div class="space-x-4 lg:space-x-6">
		<a
			href="/"
			class="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
		>
			New will
		</a>
		<a
			href="/"
			class="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
		>
			Will Vault
		</a>
		<a
			href="/"
			class="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
		>
			About
		</a>
	</div>
	<div class="ml-auto flex items-center space-x-4">Wallet placeholder</div>
</nav>
