<style scoped>

.input-wrapper {
	@apply mb-8 flex flex-col h-20;
}

input[type=text], select {
	@apply bg-primary rounded-lg h-full mt-2 text-sm px-2 py-3;
}

</style>
<template>
	<main>
		<HeaderDeposit />
		<section class="mt-20">
			<h1 class="text-lg font-medium">Formulir</h1>
			<p class="text-xs">
				<i class="fas fa-lightbulb mr-1"></i>
				Silahkan isi form dibawah ini dengan benar
			</p>
		</section>
		<form class="mt-8 w-full flex flex-wrap justify-between">
			<div class="input-wrapper w-5/12">
				<label>kg sampah</label>
				<input type="text" placeholder="Berat sampah" />
			</div>
			<div class="input-wrapper w-5/12">
				<label>Metode</label>
				<select>
					<option>Metode setor</option>
					<option>Antar sendiri</option>
					<option>Jemput petugas</option>
				</select>
			</div>
			<div class="input-wrapper w-full">
				<label>Pilih lokasi penjemputan</label>
				<select>
					<option>Unit Bank sampah</option>
				</select>
				<p class="text-xs mt-3">
					<i class="fas fa-lightbulb mr-1"></i>
					Hanya untuk metode pengantaran <strong>antar sendiri</strong>
				</p>
			</div>
		</form>
		<section class="mt-6">
			<h1 class="font-medium text-lg">Kategori sampah</h1>
			<TrashCategory />
		</section>
	</main>
</template>

<script setup>

import HeaderDeposit from '@/components/HeaderDeposit.vue'
import TrashCategory from '@/components/TrashCategory.vue'

</script>
