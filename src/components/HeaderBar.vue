<style scoped>
.wrapper{
	@apply fixed top-0 left-0 right-0;
}

.header-bar {
	@apply bg-drop flex items-center justify-between p-5;
}
</style>

<template>
	<main class="wrapper">
		<section class="responsive-container header-bar">
			<slot name="start"></slot>
			<slot name="end"></slot>
		</section>
	</main>
</template>
