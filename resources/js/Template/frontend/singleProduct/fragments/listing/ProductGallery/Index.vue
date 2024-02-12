<template>
    <div class="p-5">
        <LightBox
            :productImages="productImages"
        />
        <ThumbsSlider />
    </div>
</template>

<script setup>
import { ThumbsSlider, LightBox } from "@/plugins/ui"

const productImages = [
    {
        original: 'https://mp.images.icas.io/api/v1/a6519ad0/images/3f/3f46e442-a09f-4ebd-aa2a-2382d43d6b7a?rule=eps_83',
        thumbnail:
            'https://mp.images.icas.io/api/v1/a6519ad0/images/3f/3f46e442-a09f-4ebd-aa2a-2382d43d6b7a?rule=eps_83',
        caption: 'slider 1',
    },
    {
        original: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fHww',
        thumbnail:
            'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fHww',
        caption: 'slider 2',
        active: true
    },
    {
        original: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fHww',
        thumbnail:
            'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fHww',
        caption: 'slider 3',
    },
    {
        original: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww',
        thumbnail:
            'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww',
        caption: 'slider 4',
    },
    {
        original: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww',
        thumbnail:
            'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww',
        caption: 'slider 5',
    },
    {
        original: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww',
        thumbnail:
            'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww',
        caption: 'slider 4',
    },
    {
        original: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww',
        thumbnail:
            'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww',
        caption: 'slider 5',
    },
    {
        original: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww',
        thumbnail:
            'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww',
        caption: 'slider 4',
    },
    {
        original: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww',
        thumbnail:
            'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww',
        caption: 'slider 5',
    },
    {
        original: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww',
        thumbnail:
            'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww',
        caption: 'slider 4',
    },
    {
        original: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww',
        thumbnail:
            'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww',
        caption: 'slider 5',
    },
]
</script>