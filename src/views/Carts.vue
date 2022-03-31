<template>
	<HeaderBar>
		<template v-slot:start>
			<section class="text-gray-300 flex gap-3 items-center">
				<i @click="emits('back')" class="fa fa-arrow-left text-lg"></i>
				<div>
					<h1 class="text-xl font-semibold">Keranjang</h1>
					<p class="text-sm">Lihat keranjang belanjaan anda disini</p>
				</div>
			</section>
		</template>
	</HeaderBar>
	<section class="mt-20 text-gray-300">
	
	</section>
</template>

<script setup>

import HeaderBar from '@/components/HeaderBar.vue'

const emits = defineEmits(['back'])
</script>
