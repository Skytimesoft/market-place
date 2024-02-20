<template>
    <Layout>
        <div class="py-12">
            <div class="custom-container">
                <h1 class="mb-7 text-3xl font-semibold">{{printString('My wishlist products')}}</h1>
                <div class="space-y-4">
                    <article 
                        v-for="n in 7"
                    >
                        <div class="bg-white shadow-md rounded flex justify-between items-center">
                            <div class="relative flex items-center gap-4">
                                <Link href="/single-product" class="absolute inset-0 z-50"></Link>
                                <Img 
                                    src="https://mp.images.icas.io/api/v1/a6519ad0/images/3f/3f46e442-a09f-4ebd-aa2a-2382d43d6b7a?rule=eps_83"
                                    alt="Car" 
                                    class="w-[180px] h-24 lg:h-28"
                                />
                                <div>
                                    <h4 class="text-lg text-primary font-medium ellipsis-text">
                                        Opel Movano Delivery van L2 H2 2018 Diesel Manua
                                    </h4>
                                    <p class="mt-2 font-semibold">{{ printPrice(1600) }}</p>
                                </div>
                            </div>
                            <div class="px-4">
                                <Icon 
                                    name="PhXCircle"
                                    size="20"
                                    color="red"
                                />
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script setup>
import Layout from '@/Template/frontend/layout/Index.vue'
import { Button, Img, Icon } from "@/plugins/ui" 
import { Link } from '@inertiajs/vue3'
import { printString, printPrice } from '@/utilities/helper'
</script>