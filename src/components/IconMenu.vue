<template>
	<main class="w-full flex flex-col items-center gap-3">
		<div @click="navigate" class="w-full h-16 active:scale-75 duration-300 grid place-items-center bg-primary rounded-lg px-3 py-1">
			<i class="fas fa-th"></i>
		</div>
		<small>{{ source.name }}</small>
	</main>
</template>

<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
	source: {
		type: Object
	}
})

const navigate = () => {
	setTimeout(() => {
		router.push({ name: props.source.to })
	}, 300)
}

</script>
