<template>
    <div>
        <Img
            v-if="lightBoxImages[activeImage]"
            :src="lightBoxImages[activeImage].original"
            :alt="lightBoxImages[activeImage].thumbnail"
            class="w-full object-cover bg-red-200"
        />
        <LightBoxFooter
            :lightBoxImages="lightBoxImages"
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
        lightBoxImages: {
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
        lightBoxImages.value = props.lightBoxImages
        activeImage.value    = props.lightBoxImages.findIndex(img => img.active) || 0
    })
</script>