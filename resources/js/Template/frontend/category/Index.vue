<template>
    <Layout>
        <div class="px-5">
            <TopSearchBar />
            <div class="custom-container">
                <Breadcrumbs />
            </div>
        </div>
    </Layout>
</template>

<script setup>
import { Breadcrumbs } from '@/plugins/ui'
import Layout from '@/Template/frontend/layout/Index.vue'
import TopSearchBar from "@/Template/frontend/fragments/topSearchBar/Index.vue"
</script>