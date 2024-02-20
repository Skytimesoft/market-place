<template>
    <section>
        <div class="custom-container">
            <div class="flex justify-between items-center mb-4">
                <h4 class="text-lg font-bold">Other ads by Auto Garant Nunspeet</h4>
                <Link 
                    class="hover:underline text-primary font-medium"
                    href="/"
                >
                    View all
                </Link>
            </div>

            <div class="grid grid-cols-2 lg:grid-cols-5 gap-4">
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
import { Link } from "@inertiajs/vue3"
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
    },
    {
        title: 'Opel Movano Delivery van L2 H2 2018 Diesel Manua',
        price: 39500,
        src: 'https://mp.images.icas.io/api/v1/a6519ad0/images/3f/3f46e442-a09f-4ebd-aa2a-2382d43d6b7a?rule=eps_83'
    }
]
</script>