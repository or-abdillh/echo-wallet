<template>
	
	<section class="mt-20 text-gray-300">
		<HeaderCart />
	</section>
	<section class="mt-20">
		<template v-for="(cart, x) in carts" :key="x">
			<List>
				<template v-slot:start>
					<div class="flex items-center gap-3 mt-3">
						<img src="/product.jpg" class="rounded-lg" width="70" />
						<div class="text-gray-300">
							<h1 class="font-medium">{{ cart.title }}</h1>
							<p class="text-sm">Rp.{{ cart.price.toLocaleString() }}</p>
						</div>
					</div>
				</template>
				<template v-slot:end>
					<IncrementBar :value="cart.amount" />
				</template>
			</List>
		</template>		
	</section>
	<section class="mt-10">
		<button class="bg-green-600 py-3 rounded-full w-full flex flex-col items-center">
			<span class="font-semibold">CHECKOUT</span>
			<span class="text-sm">Rp.300.000,00,-</span>
		</button>
	</section>
</template>

<script setup>

import HeaderCart from '@/components/HeaderCart.vue'
import { computed } from 'vue'
import { useHistory } from '@/stores/history'
import List from '@/components/List.vue'
import IncrementBar from '@/components/IncrementBar.vue'

const emits = defineEmits(['back'])
const history = useHistory()
const carts = computed(() => history.carts)

</script>
