<template>
    <Layout>
        <div class="bg-red-500"></div>
    </Layout>
</template>

<script setup>
    import Layout from '@/Template/frontend/layout/Index.vue'
    import { printPrice, printDate, printString } from '@/utilities/helper.js'

    defineOptions({
        name: 'Home'
    })
</script>