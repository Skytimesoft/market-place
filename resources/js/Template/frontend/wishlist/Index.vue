<template>
    <Layout>
        <div class="py-12">
            <div class="custom-container">
                <h1 class="mb-7 text-3xl font-semibold">My wishlist products</h1>
                <div class="bg-white shadow-md rounded">
                    <div class="grid grid-cols-2 bg-[#ECEDEC] text-center">
                        <div class="px-4 py-2 font-semibold uppercase text-sm">Product title</div>
                        <div class="px-4 py-2 font-semibold uppercase text-sm">Print price</div>
                        <div></div>
                    </div>

                    <div 
                        v-for="n in 5"
                        class="relative"
                    >
                        <div class="grid grid-cols-2 text-center border-b">
                            <h4 class="px-4 py-3 text-sm">
                                Audi A5 Cabriolet 1.8 TFSI Pro Line S-Line/DAB+/ROTOR/PDC/XE
                            </h4>
                            <div class="px-4 py-3 text-sm font-semibold">
                                {{ printPrice(16.249) }}
                            </div>
                        </div>
                        <div class="absolute right-4 top-1/2 -translate-y-1/2">
                            <Button.Native
                                :icon="{
                                    name: 'PhXCircle',
                                    size: 20,
                                    color: 'red'
                                }"
                                outline="true"
                                class="shrink-0"
                            >
                            </Button.Native>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script setup>
import Layout from '@/Template/frontend/layout/Index.vue'
import { Button } from "@/plugins/ui"
import { printPrice } from '@/utilities/helper'
</script>