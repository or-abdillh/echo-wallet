<template>
    <HeaderBar>
		<template v-slot:start>
			<section class="text-gray-300 flex gap-3 items-center">
				<i @click="router.go(-1)" class="fa fa-arrow-left text-lg"></i>
				<div>
					<h1 class="text-xl font-semibold">Keranjang</h1>
					<p class="text-sm">Lihat keranjang belanjaan anda disini</p>
				</div>
			</section>
		</template>
	</HeaderBar>
</template>

<script setup>

import HeaderBar from '@/components/HeaderBar.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

</script>
