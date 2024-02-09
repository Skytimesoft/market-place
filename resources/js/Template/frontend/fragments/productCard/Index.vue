<template>
    <article v-if="item" class="relative rounded overflow-hidden">
        <Link href="/single-product" class="absolute inset-0 z-50"></Link>
        <div class="bg-white shadow-md">
            <Img 
                :src="item[imgKey]"
                alt="Car" 
                class="h-[170px]"
            />
            <div class="p-4">
                <h4 class="text-sm text-primary font-medium ellipsis-text">
                    {{ printString(item[titleKey]) }}
                </h4>
                <p class="mt-1 font-semibold">{{ printPrice(item[priceKey]) }}</p>
            </div>
        </div>
    </article>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'
import { Img } from '@/plugins/ui'
import { printString, printPrice } from '@/utilities/helper'

defineProps({
    titleKey: {
        type: String,
        default: 'title'
    },
    priceKey: {
        type: String,
        default: 'price'
    },
    imgKey: {
        type: String,
        default: 'src'
    },
    item: {
        type: Object
    },
})
</script>