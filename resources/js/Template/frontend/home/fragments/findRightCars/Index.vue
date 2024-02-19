<template>
    <section class="mb-12">
        <div class="custom-container">
            <h3 class="font-bold text-xl">Find what's right for you</h3>
            <div class="mt-7 grid grid-cols-2 lg:grid-cols-4 gap-4">
                <article v-for="product in products" :key="product?.title" class="relative">
                    <Link to="/" class="absolute inset-0 z-50"></Link>
                    <div class="bg-white shadow-md rounded overflow-hidden">
                        <Img 
                            :src="product?.src"
                            alt="Car" 
                            class="h-[170px] bg-[#ebebeb]"
                        />
                        <div class="p-4">
                            <h4 class="font-bold">
                                {{ printString(product?.title) }}
                            </h4>
                            <p class="mt-1 text-sm">{{ printString(product?.content) }}</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'
import { Img } from '@/plugins/ui'
import { printString, printPrice } from '@/utilities/helper'
import ProductCard from '@/Template/frontend/fragments/productCard/Index.vue'

const products = [
    {
        title: 'Family cars',
        content: 'SUVs, MPVs and estates',
        src: 'https://cdn.ebayclassifieds.net/bff/static/images/images/cars-carousels/needs-family@1x.8c7e8f3e.png'
    },
    {
        title: 'Fuel-efficient petrol cars',
        content: 'Gasoline (15+ km/l)',
        src: 'https://cdn.ebayclassifieds.net/bff/static/images/images/cars-carousels/needs-family@1x.8c7e8f3e.png'
    },
    {
        title: 'Family cars',
        content: 'SUVs, MPVs and estates',
        src: 'https://cdn.ebayclassifieds.net/bff/static/images/images/cars-carousels/needs-family@1x.8c7e8f3e.png'
    },
    {
        title: 'Fuel-efficient petrol cars',
        content: 'Gasoline (15+ km/l)',
        src: 'https://cdn.ebayclassifieds.net/bff/static/images/images/cars-carousels/needs-family@1x.8c7e8f3e.png'
    }
]
</script>