<template>
    <HeaderBar>
        <template v-slot:start>
            <section class="flex items-center gap-3">
                <i @click="router.go(-1)" class="active:scale-95 duration-300 fa fa-arrow-left"></i>
                <div>
                    <h1 class="font-semibold">Marketplace</h1>
                    <p class="text-sm">Beli produk UKM disini</p>
                </div>
            </section>
        </template>
        <template v-slot:end>
            <section>
                <span class="relative">
                    <span style="width:25px; height:25px" 
                        class="text-xxs bg-red-500 text-gray-300 grid place-items-center absolute left-2 -top-4 text-xs rounded-full"><p>{{ carts.length }}</p></span>
                    <i class="text-lg fa fa-shopping-cart"></i>
                </span>
            </section>
        </template>
    </HeaderBar>  
</template>

<script setup>

import { computed } from 'vue'
import HeaderBar from '@/components/HeaderBar.vue'
import { useHistory } from '@/stores/history'
import backAction from '@/helper/backAction.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const history = useHistory()
const carts = computed(() => history.carts)

</script>
