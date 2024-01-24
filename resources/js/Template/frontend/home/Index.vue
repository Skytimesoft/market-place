<template>
    <Layout>
        <div class="py-20">
            hello
        </div>
    </Layout>
</template>

<script setup>
    import Layout from '@/Template/frontend/layout/Index.vue'
    import { printPrice, printDate, printString } from '@/utilities/helper.js'

    defineOptions({
        name: 'Home'
    })
</script>