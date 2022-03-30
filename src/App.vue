<template>
	<main class="app">
		<router-view></router-view>
	</main>
	<BottomBar v-if="routeName !== 'Login'" />
</template>

<script setup>

import { useRoute } from 'vue-router'
import BottomBar from '@/components/BottomBar.vue'
import { computed } from 'vue'

const route = useRoute()
const routeName = computed(() => route.name)

</script>

<style scoped>
.app {
	@apply py-5 px-10 pb-20 w-full md:w-6/12 lg:w-5/12 md:mx-auto xl:w-4/12
}
</style>
