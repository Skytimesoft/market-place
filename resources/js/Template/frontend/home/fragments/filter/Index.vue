<template>
    <section class="-mt-[170px] lg:-mt-[200px] relative">
        <div class="custom-container">
            <h1 class="text-white text-xl font-bold">Buying a used or new car</h1>
            <div class="mt-3 flex flex-col lg:flex-row justify-between gap-6">
                <LeftContent />
                <RightContent />
            </div>
        </div>
    </section>
</template>

<script setup>
import LeftContent from './leftContent/Index.vue'
import RightContent from './RightContent.vue'
</script>