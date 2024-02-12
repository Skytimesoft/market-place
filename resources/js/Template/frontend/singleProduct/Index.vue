<template>
    <Layout>
        <div>
            <TopSearchBar />
            <div class="custom-container">
                <Breadcrumbs />
            </div>
            <div class="pb-8">
                <div class="custom-container">
                    <div class="flex items-start gap-5">
                        <Listing />
                        <Sidebar />
                    </div>
                </div>
            </div>
            <RelatedProducts />
            <PopularSearch />
            <Categories />
        </div>
    </Layout>
</template>

<script setup>
import { Breadcrumbs } from '@/plugins/ui'
import Layout from '@/Template/frontend/layout/Index.vue'
import TopSearchBar from "@/Template/frontend/fragments/topSearchBar/Index.vue"
import Listing from './fragments/listing/Index.vue'
import Sidebar from './fragments/sidebar/Index.vue'
import RelatedProducts from './fragments/relatedProducts/Index.vue'
import PopularSearch from './fragments/popularSearch/Index.vue'
import Categories from './fragments/categories/Index.vue'

defineOptions({
    name: 'SingleProduct'
})
</script>