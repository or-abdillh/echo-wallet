<template>
	 <main class="flex justify-between gap-3 mt-3">
		<template v-for="(service, x) in services" :key="x">
			<IconMenu :source="service" />
		</template>
	</main>
</template>

<script setup>

import IconMenu from '@/components/IconMenu.vue'

const services = [
	{
		name: 'Setor',
		to: 'setor'
	},
	{
		name: 'Kirim Uang',
		to: 'kirim-uang'
	},
	{
		name: 'Tarik Tunai',
		to: 'tarik-tunai'
	},
	{
		name: 'Tukar Poin',
		to: 'tukar-poin'
	}
]

</script>
