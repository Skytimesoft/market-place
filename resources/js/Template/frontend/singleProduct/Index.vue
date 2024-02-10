<template>
    <Layout>
        <SearchBar />
        <Breadcrumbs />
        <div class="py-8">
            <div class="custom-container">
                <div class="flex gap-5">
                    <Listing />
                    <Sidebar />
                </div>
            </div>
        </div>

        <RelatedProducts />
    </Layout>
</template>

<script setup>
import Layout from '@/Template/frontend/layout/Index.vue'
import SearchBar from './fragments/searchBar/Index.vue'
import Breadcrumbs from './fragments/breadcrumbs/Index.vue'
import Listing from './fragments/listing/Index.vue'
import Sidebar from './fragments/sidebar/Index.vue'
import RelatedProducts from './fragments/relatedProducts/Index.vue'

defineOptions({
    name: 'SingleProduct'
})
</script>