import { ref } from 'vue'

export const useLightBox = () => {
    const lightBoxImages = ref([])
    const activeImage = ref(null)
    const changeSlide = (direction) => {
        console.log(direction, 'working')
        const currentIndex = activeImage.value + direction
        
        let index = currentIndex < 0 
                    ? (lightBoxImages.value.length - 1)
                    : currentIndex > (lightBoxImages.value.length - 1)
                        ? 0 : currentIndex

        setActiveImage(index)
    }

    const setActiveImage = (index) => {
        activeImage.value = index
    }

    return {
        lightBoxImages,
        activeImage,
        changeSlide,
        setActiveImage
    }
}