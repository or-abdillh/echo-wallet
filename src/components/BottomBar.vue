<style scoped>

.wrapper {
	@apply z-50 fixed bottom-0 left-0 right-0;
}

.bottom-bar {
	@apply bg-drop flex px-10 py-5 justify-between text-secondary; 
}

</style>

<template>
	<main class="wrapper">
		<section class="bottom-bar responsive-container">
			<template v-for="nav in navigations" :key="nav.id">
				<span
					@click="menuAction(nav)"
					class="flex flex-col items-center active:scale-95 duration-300">
					<i :class="nav.icon" class="text-2xl"></i>
					<i v-if="routeName === nav.name" class="text-xxs fa fa-circle"></i>
				</span>
			</template>
		</section>
	</main>
</template>

<script setup>

import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const currentNav = ref(1)
const router = useRouter()
const route = useRoute()

const routeName = computed(() => route.name)

const navigations = [
	{
		name: 'Home',
		id: 1,
		to: 'Home',
		icon: 'fa fa-home'
	},
	{
		name: 'Marketplace',
		id: 2,
		to: 'Marketplace',
		icon: 'fa fa-shopping-cart'
	},
	{
		name: 'Profile',
		id: 3,
		to: 'profile',
		icon: 'fa fa-user'
	}
]

const menuAction = nav => {
	router.push({ name: nav.to })
}

</script>
