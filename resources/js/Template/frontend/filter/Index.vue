<template>
    <Layout>
        <div class="pb-12">
            <TopSearchBar />
            <div class="custom-container">
                <div class="flex justify-between items-center gap-4">
                    <Breadcrumbs />
                    <div class="flex-shrink-0">
                        <Button.Primary
                            :icon="{
                                name: 'PhBellRinging',
                                size: 16
                            }"
                        >
                            <span>Save search</span>
                        </Button.Primary>
                    </div>
                </div>

                <div class="py-10 flex flex-col lg:flex-row items-start gap-8">
                    <Sidebar />
                    <Listing />
                </div>

                <Pagination />
            </div>
        </div>
    </Layout>
</template>

<script setup>
import { Button } from "@/plugins/ui"
import { Breadcrumbs } from '@/plugins/ui'
import Layout from '@/Template/frontend/layout/Index.vue'
import TopSearchBar from "@/Template/frontend/fragments/topSearchBar/Index.vue"
import Pagination from "@/Template/frontend/fragments/pagination/Index.vue"
import Sidebar from "./sidebar/Index.vue"
import Listing from "./listing/Index.vue"
</script>