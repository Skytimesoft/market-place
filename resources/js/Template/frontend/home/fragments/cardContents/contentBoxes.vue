<template>
    <div class="grid lg:grid-cols-3 gap-4 lg:gap-6">
        <article 
            v-for="item in contentBoxes" 
            :key="item?.title" 
            class="bg-white shadow-md rounded overflow-hidden"
        >
            <Img 
                :src="item?.src" 
                alt="Car" 
                class="w-full" 
            />
            <div class="p-4">
                <h4 class="text-xl font-bold">
                    {{ printString(item?.title) }}
                </h4>
                <p class="text-sm mt-2 mb-5">{{ printString(item?.content) }}</p>
                <Button.Primary outline="true" class="font-bold">
                    {{ printString(item?.buttonText) }}
                </Button.Primary>
            </div>
        </article>
    </div>
</template>


<script setup>
import { Button } from '@/plugins/ui'
import { printString } from '@/utilities/helper'

const contentBoxes = [
    {
        title: 'The Car Assistant',
        content: 'Which car suits you best? What should you pay attention to during a test drive? The Marktplaats Auto Assistant helps you on your way with all questions about the purchase of a used car, lease or new car.',
        buttonText: 'Directly to the Car Assistant',
        src: 'https://cdn.ebayclassifieds.net/bff/static/images/images/cars-page/mp-autopaginabanner.1df0dfef.png'
    },
    {
        title: 'Selling your car privately?',
        content: 'Which car suits you best? What should you pay attention to during a test drive? The Marktplaats Auto Assistant helps you on your way with all questions about the purchase of a used car, lease or new car.',
        buttonText: 'Directly to the Car Assistant',
        src: 'https://cdn.ebayclassifieds.net/bff/static/images/images/cars-page/mp-auto-particulier-verkopen-1x.7b9be838.png'
    },
    {
        title: 'The Car Assistant',
        content: 'Which car suits you best? What should you pay attention to during a test drive? The Marktplaats Auto Assistant helps you on your way with all questions about the purchase of a used car, lease or new car.',
        buttonText: 'Directly to the Car Assistant',
        src: 'https://cdn.ebayclassifieds.net/bff/static/images/images/cars-page/mp-autopaginabanner.1df0dfef.png'
    }
]
</script>