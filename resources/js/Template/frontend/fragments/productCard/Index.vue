<template>
    <Link to="/" v-for="product in products" :index="product?.title">
        <div class="bg-white shadow-md ">
            <Img 
                :src="product[productImg]"
                alt="Car" 
                class="h-[132px]"
            />
            <div class="p-2">
                <h4 class="text-sm text-primary font-medium ellipsis-text">
                   {{ product[productTitle] }}
                </h4>
                <p class="mt-1 font-semibold">{{ printPrice(product[productPrice]) }}</p>
            </div>
        </div>
    </Link>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'
import { Img } from '@/plugins/ui'
import { printPrice } from '@/utilities/helper'

defineProps({
    products: {
        type: Array,
        default: null
    },
    productTitle: {
        type: String,
        default: 'title'
    },
    productPrice: {
        type: Number,
        default: 'price'
    },
    productImg: {
        type: String,
        default: 'img'
    },
})
</script>