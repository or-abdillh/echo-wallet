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
					@click="currentNav = nav.id"
					class="flex flex-col items-center active:scale-95 duration-300">
					<i :class="nav.icon" class="text-2xl"></i>
					<i v-if="currentNav === nav.id" class="text-xxs fa fa-circle"></i>
				</span>
			</template>
		</section>
	</main>
</template>

<script setup>

import { ref } from 'vue'

const currentNav = ref(1)

const navigations = [
	{
		name: 'Home',
		id: 1,
		to: 'home',
		icon: 'fa fa-home'
	},
	{
		name: 'Market',
		id: 2,
		to: 'market',
		icon: 'fa fa-shopping-cart'
	},
	{
		name: 'Profile',
		id: 3,
		to: 'profile',
		icon: 'fa fa-user'
	}
]

</script>
