<template>
    <div 
        class="flex gap-4 items-center"
    >
        <Button.Primary
            :icon="{
                name: 'PhArrowLeft',
                size: 12,
            }"
            outline="true"
            @click="changeSlide(-1)"
            class="flex-shrink-0 rounded-full w-8 h-8"
        />

        <div
            v-for="(img, index) in productImages"
            :key="index"
            class="flex-shrink-0 flex-grow-0 w-20 bg-black cursor-pointer"
            @click="setActiveImage(index)"
        >
            <Img
                :src="img.thumbnail"
                :alt="img.caption"
                :class="activeImage === index ? 'opacity-100' : 'opacity-60 brightness-50'"
            />
        </div>

        <Button.Primary
            :icon="{
                name: 'PhArrowRight',
                size: 12,
            }"
            outline="true"
            @click="changeSlide(1)"
            class="flex-shrink-0 rounded-full w-8 h-8"
        />
    </div>
</template>

<script setup>
    import { Img, Button } from '@/plugins/ui'

    defineOptions({
        name: 'LightBoxFooter'
    })

    const props = defineProps({
        productImages: {
            type: Array,
            default: [],
            required: true
        },
        changeSlide: {
            type: Function,
            required: true
        },
        setActiveImage: {
            type: Function,
            required: true
        },
        activeImage: {
            type: Object,
            required: true
        }
    })
</script>