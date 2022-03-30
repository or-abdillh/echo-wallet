<template>
	<main class="mt-4">
		<template v-for="item in trashCategory" :key="item.id">
			<List>
				<template v-slot:start>
					<section class="flex items-center gap-3">
						<img :src="item.thumbnail" width="80" />
						<div>
							<h1 class="font-medium">{{ item.name }}</h1>
							<p class="font-medium text-gray-600 text-sm">{{ item.description }}</p>
						</div>
					</section>
				</template>
				<template v-slot:end>
					<span class="bg-primary w-2/12 text-center px-2 py-1 rounded-full">
						+ {{ item.point }}
					</span>
				</template>
			</List>
		</template>
	</main>
</template>

<script setup>

import List from '@/components/List.vue'
import trashCategory from '@/contents/TrashCategory.js'

</script>
