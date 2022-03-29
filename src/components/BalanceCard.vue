<style scoped>

p {
	@apply text-lg;
}

h1 {
	@apply text-xl font-semibold block my-5;
}
</style>

<template>
	<main class="w-full mx-auto bg-primary px-1 py-8 rounded-xl flex items-start justify-evenly">
		<section>
			<p>Saldo anda</p>
			<h1>{{ balances.current.toLocaleString() }} IDR</h1>
			<span class="w-full flex justify-between items-center">
				<small>{{ balances.trend.value.toLocaleString() }} IDR</small>
				<span class="flex items-start gap-1">
					<i class="fas fa-caret-up text-xl"></i>
					<small>{{ balances.trend.percent }}{{ balances.trend.prefix }}</small>
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
