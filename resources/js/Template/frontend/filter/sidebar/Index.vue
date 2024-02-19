<template>
    <aside class="flex-shrink-0 w-full lg:w-[300px]">
        <div class="bg-white p-4 space-y-5 shadow-md rounded">
            <Category />
            <Advertisement />
            <Price />
            <Fuel />
            <Range />
        </div>
    </aside>
</template>

<script setup>
import Category from './Category.vue';
import Advertisement from './Advertisement.vue';
import Price from './Price.vue';
import Fuel from './Fuel.vue';
import Range from './Range.vue';
</script>