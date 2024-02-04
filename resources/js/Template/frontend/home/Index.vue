<template>
    <Layout>
        <Banner />
        <Filter />
        <RecentlyViewed />
        <ProductTabs />
    </Layout>
</template>

<script setup>
import Layout from '@/Template/frontend/layout/Index.vue'
import Banner from './fragments/banner/Index.vue'
import Filter from './fragments/filter/Index.vue'
import RecentlyViewed from './fragments/recentlyViewed/Index.vue'
import ProductTabs from './fragments/productTabs/Index.vue'
// import { printPrice, printDate, printString } from '@/utilities/helper.js'

defineOptions({
    name: 'Home'
})
</script>