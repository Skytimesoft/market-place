<template>
    <section class="-mt-[200px] relative z-50">
        <div class="custom-container">
            <h1 class="text-white text-xl font-bold">Buying a used or new car</h1>
            <div class="mt-3 flex justify-between gap-6">
                <LeftContent />
                <RightContent />
            </div>
        </div>
    </section>
</template>

<script setup>
import LeftContent from './LeftContent.vue'
import RightContent from './RightContent.vue'
</script>