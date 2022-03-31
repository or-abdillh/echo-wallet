<template>
    <List>
        <template v-slot:start>
            <div class="flex items-center gap-3 mt-3">
                <img src="/product.jpg" class="rounded-lg" width="70" />
                <div class="text-gray-300">
                    <h1 class="font-medium">{{ cart.title }}</h1>
                    <p class="text-sm">Rp.{{ cart.price.toLocaleString('id') }}</p>
                </div>
            </div>
        </template>
        <template v-slot:end>
            <IncrementBar :value="cart.amount" />
        </template>
    </List>
</template>

<script setup>

import List from '@/components/List.vue'
import IncrementBar from '@/components/IncrementBar.vue'

const props = defineProps({
    cart: {
        type: Object
    }
})

</script>
