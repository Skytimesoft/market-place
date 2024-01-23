<template>
    <div class="border-4 border-green-500">
        <TopNavigation />
        <slot></slot>
        <Footer />
    </div>
</template>

<script setup>
    import TopNavigation from '@/Template/frontend/fragments/footer/Index.vue'
    import Footer from '@/Template/frontend/fragments/footer/Index.vue'

    defineOptions({
        name: 'FrontendLayout'
    })
</script>