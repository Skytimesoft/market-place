<template>
    <section class="mt-12 mb-8">
        <div class="custom-container">
            <h3 class="font-bold text-xl">Recently viewed</h3>
            <div class="mt-7 grid grid-cols-4 gap-5">
                <ProductCard 
                    v-for="item in products" 
                    :key="index" 
                    :item="item"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import ProductCard from '@/Template/frontend/fragments/productCard/Index.vue'

const products = [
    {
        title: 'Opel Movano Delivery van L2 H2 2018 Diesel Manua',
        price: 39500,
        src: 'https://mp.images.icas.io/api/v1/a6519ad0/images/3f/3f46e442-a09f-4ebd-aa2a-2382d43d6b7a?rule=eps_83'
    },
    {
        title: 'Opel Movano Delivery van L2 H2 2018 Diesel Manua',
        price: 39500,
        src: 'https://mp.images.icas.io/api/v1/a6519ad0/images/3f/3f46e442-a09f-4ebd-aa2a-2382d43d6b7a?rule=eps_83'
    },
    {
        title: 'Opel Movano Delivery van L2 H2 2018 Diesel Manua',
        price: 39500,
        src: 'https://mp.images.icas.io/api/v1/a6519ad0/images/3f/3f46e442-a09f-4ebd-aa2a-2382d43d6b7a?rule=eps_83'
    },
    {
        title: 'Opel Movano Delivery van L2 H2 2018 Diesel Manua',
        price: 39500,
        src: 'https://mp.images.icas.io/api/v1/a6519ad0/images/3f/3f46e442-a09f-4ebd-aa2a-2382d43d6b7a?rule=eps_83'
    }
]
</script>