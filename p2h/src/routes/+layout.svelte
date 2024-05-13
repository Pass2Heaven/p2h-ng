<script>
	import Navbar from '$lib/components/ui/navbar.svelte';
	import '../app.css';
</script>

<div class="container">
	<div class="mb-4 mt-4">
		<Navbar />
	</div>
	<slot></slot>
</div>

<style></style>
