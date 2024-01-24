<template>
    <div>
        <TopNavigation />
        <main class="min-h-screen">
            <slot></slot>
        </main>
        <Footer />
    </div>
</template>

<script setup>
    import TopNavigation from '@/Template/frontend/fragments/topNavigation/Index.vue'
    import Footer from '@/Template/frontend/fragments/footer/Index.vue'

    defineOptions({
        name: 'FrontendLayout'
    })
</script>