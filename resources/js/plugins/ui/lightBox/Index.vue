<template>
    <div
    >
        <Img
            v-if="lightBoxImages[activeImage]"
            :src="lightBoxImages[activeImage].original"
            :alt="lightBoxImages[activeImage].thumbnail"
            class="w-full aspect-square object-cover bg-red-200"
        />
        <LightBoxFooter
            :productImages="lightBoxImages"
            :changeSlide="changeSlide"
            :activeImage="activeImage"
            :setActiveImage="setActiveImage"
        />
    </div>
</template>

<script setup>
    import { onMounted } from 'vue'
    import LightBoxFooter from './fragments/Footer.vue'
    import { useLightBox } from './useLightBox.js'

    const props = defineProps({
        productImages: {
            type: Array,
            default: [],
            required: true
        }
    })

    defineOptions({
        name: 'LightBox'
    })
    
    const { lightBoxImages, activeImage, changeSlide, setActiveImage } = useLightBox()

    onMounted(() => {
        lightBoxImages.value = props.productImages
        activeImage.value    = props.productImages.findIndex(img => img.active) || 0
    })
</script>