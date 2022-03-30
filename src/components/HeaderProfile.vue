<template>
    <HeaderBar>
        <template v-slot:start>
            <section class="flex items-center gap-3">
                <div>
                    <h1 class="font-semibold text-gray-300 text-xl">Profile</h1>
                    <p class="text-sm">Informasi dan data diri anda</p>
                </div>
            </section>
        </template>
    </HeaderBar> 
</template>

<script setup>

import { computed, ref } from 'vue'
import HeaderBar from '@/components/HeaderBar.vue'
</script>
