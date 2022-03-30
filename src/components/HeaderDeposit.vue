<template>
	<HeaderBar>
        <template v-slot:start>
            <section class="flex items-center gap-3">
                <i @click="router.go(-1)" class="active:scale-95 duration-300 fa fa-arrow-left"></i>
                <div>
                    <h1 class="font-semibold text-xl">Setor</h1>
                    <p class="text-sm">Setor sampah anda disini</p>
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
