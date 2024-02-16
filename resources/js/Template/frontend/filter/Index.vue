<template>
    <Layout>
        <div class="px-5">
            <TopSearchBar />
            <div class="custom-container">
                <div class="flex justify-between items-center gap-4">
                    <Breadcrumbs />
                    <div>
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

                <div class="py-10 flex items-start gap-5">
                    <Sidebar />
                    <Listing />
                </div>
            </div>
        </div>
    </Layout>
</template>

<script setup>
import { Button } from "@/plugins/ui"
import { Breadcrumbs } from '@/plugins/ui'
import Layout from '@/Template/frontend/layout/Index.vue'
import TopSearchBar from "@/Template/frontend/fragments/topSearchBar/Index.vue"
import Sidebar from "./sidebar/Index.vue"
import Listing from "./listing/Index.vue"
</script>