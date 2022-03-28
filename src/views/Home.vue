<style scoped>

.title {
	@apply font-medium text-lg;
}

</style>

<template>
	<main class="pt-20">
		<HeaderHome />
		<BalanceCard />
		<section class="mt-12"> 
			<h1 class="title">Layanan</h1>
			<Services />
		</section>
	</main>
</template>	

<script setup>

import HeaderHome from '@/components/HeaderHome.vue'
import BalanceCard from '@/components/BalanceCard.vue'
import Services from '@/components/Services.vue'

</script>
