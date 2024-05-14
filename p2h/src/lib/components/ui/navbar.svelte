<script lang="ts">
	import Logo from '$lib/components/svg/logo.svelte';
	import WalletProviders from '$lib/components/WalletProviders.svelte';
</script>

<nav class="md:justify-items-star flex flex-col items-center gap-y-2 md:flex-row">
	<div class="mr-4 max-w-[200px]"><Logo /></div>
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
	<div class="flex items-center space-x-4 md:ml-auto">
		<WalletProviders />
	</div>
</nav>
