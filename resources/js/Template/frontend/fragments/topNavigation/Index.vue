<template>
    <header class="bg-white border-t-4 border-secondary shadow-md px-4 py-2 sticky top-0 z-[9999]">
        <div class="custom-container">
            <nav class="flex justify-between items-center">
                <LeftContent />
                <RightContent />
            </nav>
        </div>
    </header>
</template>

<script setup>
import LeftContent from './LeftContent.vue';
import RightContent from './RightContent.vue';

defineOptions({
    name: 'navigationComponent',
})
</script>