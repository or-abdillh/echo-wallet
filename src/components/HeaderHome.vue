<template>
	<HeaderBar>
		<template v-slot:start>
			<div class="flex w-7/12 gap-3">
				<span>
					<img src="/avatar.jpg" class="rounded-full" width="50" />
				</span>
				<div>
					<p class="font-medium text-lg">{{ fullname }}</p>
					<small class="">Hay, selamat pagi</small>
				</div>
			</div>
		</template>
		<template v-slot:end>
			<div class="text-lg">
				<span class="mr-5">
					<i class="fa fa-bell"></i>
				</span>
				<i class="fa fa-ellipsis-h"></i>
			</div>
		</template>
	</HeaderBar>
</template>

<script setup>

import { computed } from 'vue'
import HeaderBar from '@/components/HeaderBar.vue'
import { useUser } from '@/stores/user'

const user = useUser()
const fullname = computed(() => user.fullname)


</script>
