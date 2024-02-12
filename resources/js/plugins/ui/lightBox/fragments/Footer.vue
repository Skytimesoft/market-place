<template>
    <div 
        class="mt-4 grid grid-cols-[32px_1fr_32px] gap-4 items-center"
    >
        <Button.Primary
            :icon="{
                name: 'PhArrowLeft',
                size: 12,
            }"
            outline="true"
            @click="changeSlide(-1)"
            class="rounded-full w-8 h-8"
        />

        <div 
            class="flex gap-2 overflow-x-hidden"
        >
            <div
                v-for="(img, index) in lightBoxImages"
                :key="index"
                class="w-20 bg-black cursor-pointer"
                @click="setActiveImage(index)"
            >
                <Img
                    :src="img.thumbnail"
                    :alt="img.caption"
                    :class="activeImage === index ? 'opacity-100' : 'opacity-60 brightness-50'"
                />
            </div>
        </div>

        <Button.Primary
            :icon="{
                name: 'PhArrowRight',
                size: 12,
            }"
            outline="true"
            @click="changeSlide(1)"
            class="rounded-full w-8 h-8"
        />
    </div>
</template>

<script setup>
    import { Img, Button } from '@/plugins/ui'

    defineOptions({
        name: 'LightBoxFooter'
    })

    const props = defineProps({
        lightBoxImages: {
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