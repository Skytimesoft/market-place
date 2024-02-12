<template>
    <div>
        <div>
            <Img 
                :src="fullImage"
                class="h-[380px] border border-borderLight"
            />
        </div>

        <div class="mt-4 flex items-center gap-4">
            <Button.Primary
                :icon="{
                    name: 'PhArrowLeft',
                    size: 12,
                }"
                outline="true"
                @click="goPrevSlide()"
                class="flex-shrink-0 rounded-full w-8 h-8"
            >
            </Button.Primary>
            
            <div class="grow overflow-hidden flex justify-center gap-3">
                <Img 
                    :src="image?.thumb"
                    :alt="image?.name"
                    @click="setFullImage(image, index)"
                    v-for="(image, index) in images" :key="index"
                    :class="index === activeImageIndex ? 'brightness-100' : 'brightness-50'"
                    class="w-16 h-14 cursor-pointer bg-borderLight"
                />
            </div>

            <Button.Primary
                :icon="{
                    name: 'PhArrowRight',
                    size: 12,
                }"
                outline="true"
                @click="goNextSlide()"
                class="flex-shrink-0 rounded-full w-8 h-8"
            >
            </Button.Primary>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Img, Button } from '@/plugins/ui'

const fullImage = ref(
    'https://mp.images.icas.io/api/v1/a6519ad0/images/3f/3f46e442-a09f-4ebd-aa2a-2382d43d6b7a?rule=eps_83'
);
const activeImageIndex = ref(0);

const images = [
    {
        full: 'https://mp.images.icas.io/api/v1/a6519ad0/images/3f/3f46e442-a09f-4ebd-aa2a-2382d43d6b7a?rule=eps_83',
        thumb:
            'https://mp.images.icas.io/api/v1/a6519ad0/images/3f/3f46e442-a09f-4ebd-aa2a-2382d43d6b7a?rule=eps_83',
        name: 'slider 1',
    },
    {
        full: 'https://cdn.ebayclassifieds.net/bff/static/images/images/cars-carousels/needs-family@1x.8c7e8f3e.png',
        thumb:
            'https://cdn.ebayclassifieds.net/bff/static/images/images/cars-carousels/needs-family@1x.8c7e8f3e.png',
        name: 'slider 2',
    },
    {
        full: 'https://mp.images.icas.io/api/v1/a6519ad0/images/3f/3f46e442-a09f-4ebd-aa2a-2382d43d6b7a?rule=eps_83',
        thumb:
            'https://mp.images.icas.io/api/v1/a6519ad0/images/3f/3f46e442-a09f-4ebd-aa2a-2382d43d6b7a?rule=eps_83',
        name: 'slider 3',
    },
    {
        full: 'https://cdn.ebayclassifieds.net/bff/static/images/images/cars-carousels/needs-family@1x.8c7e8f3e.png',
        thumb:
            'https://cdn.ebayclassifieds.net/bff/static/images/images/cars-carousels/needs-family@1x.8c7e8f3e.png',
        name: 'slider 4',
    },
    {
        full: 'https://mp.images.icas.io/api/v1/a6519ad0/images/3f/3f46e442-a09f-4ebd-aa2a-2382d43d6b7a?rule=eps_83',
        thumb:
            'https://mp.images.icas.io/api/v1/a6519ad0/images/3f/3f46e442-a09f-4ebd-aa2a-2382d43d6b7a?rule=eps_83',
        name: 'slider 5',
    }
];

const setFullImage = (image, index) => {
    fullImage.value = image.full;
    activeImageIndex.value = index;
};

const timelineProgressBarWidth = ref('0%');
const isAnimeState = ref(true);

const goNextSlide = () => {
    if (activeImageIndex.value == images.length - 1) {
        activeImageIndex.value = 0;
    } else {
        activeImageIndex.value = activeImageIndex.value + 1;
    }
    fullImage.value = images[activeImageIndex.value].full;

    isAnimeState.value = !isAnimeState.value;
};

const goPrevSlide = () => {
    if (activeImageIndex.value == 0) {
        activeImageIndex.value = images.length - 1;
    } else {
        activeImageIndex.value = activeImageIndex.value - 1;
    }
    fullImage.value = images[activeImageIndex.value].full;
};

const autoSlide = () => {
    if (activeImageIndex.value == images.length - 1) {
        activeImageIndex.value = 0;
    } else {
        activeImageIndex.value = activeImageIndex.value + 1;
    }
    fullImage.value = images[activeImageIndex.value].full;
};

setInterval(() => {
    autoSlide();
}, 5000);
</script>