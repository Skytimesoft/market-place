<template>
    <Layout>
        <SearchBar />
        <Breadcrumbs />
    </Layout>
</template>

<script setup>
import Layout from '@/Template/frontend/layout/Index.vue'
import SearchBar from './fragments/searchBar/Index.vue'
import Breadcrumbs from './fragments/breadcrumbs/Index.vue'

defineOptions({
    name: 'SingleProduct'
})
</script>