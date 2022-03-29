<template>
    <main class="pt-20"> 
        <HeaderMarket />
        <section class="mt-16 flex flex-wrap justify-between">
            <template v-for="(card, x) in 6" :key="x">
                <div class="w-40 mb-10">
                    <img src="/product.jpg" class="w-full" />
                    <div class="text-xs flex items-center justify-between">
                        <span>
                            <h1 class="font-medium">Tas plastik</h1>
                            <p>Rp.75.000,00,-</p>
                        </span>
                        <i class="fa fa-arrow-right text-lg"></i>
                    </div>
                </div>
            </template>
        </section>
    </main>
</template>

<script setup>

import HeaderMarket from '@/components/HeaderMarket.vue'

</script>
