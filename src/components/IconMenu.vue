<template>
	<main class="w-full flex flex-col items-center gap-3">
		<div class="w-full h-16 grid place-items-center bg-primary rounded-lg px-3 py-1">
			<i class="fas fa-th"></i>
		</div>
		<small>{{ source.name }}</small>
	</main>
</template>

<script setup>

const props = defineProps({
	source: {
		type: Object
	}
})

</script>
