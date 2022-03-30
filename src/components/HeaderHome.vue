<template>
	<HeaderBar class="z-20">
		<template v-slot:start>
			<div class="flex w-7/12 gap-3">
				<span>
					<img src="/avatar.jpg" class="rounded-full" width="50" />
				</span>
				<div class="text-gray-300">
					<p class="font-semibold text-xl">{{ fullname }}</p>
					<small class="font-medium">Hay, selamat pagi</small>
				</div>
			</div>
		</template>
		<template v-slot:end>
			<div class="text-lg text-gray-300">
				<span class="mr-5 relative">
					<span
						style="width:20px; height:20px" 
						class="bg-red-500 text-gray-300 grid place-items-center absolute left-1 -top-3 text-xs rounded-full">{{ amountNotif.length}}</span>
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
import { useNotifications} from '@/stores/notifications'

const user = useUser()
const notifications = useNotifications()

//Getter
const fullname = computed(() => user.fullname)
const amountNotif = computed(() => notifications.lists)

</script>
