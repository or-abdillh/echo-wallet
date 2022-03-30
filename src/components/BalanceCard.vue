<style scoped>

p {
	@apply text-lg;
}

h1 {
	@apply text-xl font-semibold block my-5;
}
</style>

<template>
	<main class="w-full mx-auto bg-gradient-to-r from-success to-green-500 ring-2 ring-green-400 px-1 py-8 rounded-xl flex items-start justify-evenly">
		<section>
			<p>Saldo anda</p>
			<h1>{{ balances.current.toLocaleString() }} IDR</h1>
			<span class="w-full flex justify-between items-center">
				<small>{{ balances.trend.value.toLocaleString() }} IDR</small>
				<span class="flex items-end">
					<i class="block fas fa-caret-up text-green-800 text-xl mr-1"></i>
					<small class="mb-1 block">{{ balances.trend.percent }}{{ balances.trend.prefix }}</small>
				</span>
			</span>
		</section>
		<section>
			<p>Point anda</p>
			<h1>{{ balances.points }}</h1>
		</section>
	</main>
</template>

<script setup>

import { computed } from 'vue'
import { useBalance } from '@/stores/balance'

const balance = useBalance()
const balances = computed(() => balance)

</script>
