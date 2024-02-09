<template>
    <Layout>
        <SearchBar />
    </Layout>
</template>

<script setup>
import Layout from '@/Template/frontend/layout/Index.vue'
import SearchBar from './fragments/searchBar/Index.vue'

defineOptions({
    name: 'SingleProduct'
})
</script>