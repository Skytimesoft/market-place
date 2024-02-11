<template>
    <div class="p-4">
        <p class="text-content mb-4">We're here for you</p>
        <ul class="space-y-3">
            <li
                v-for="item in items"
                :key="item?.content"
                class="flex items-center gap-4"
            >
                <Img
                    :src="item?.src"
                    :alt="item?.name"
                    class="flex-shrink-0 w-16 h-16 object-cover rounded-full"
                />
                <div>
                    <h5 class="font-bold mb-1">{{ item?.name }}</h5>
                    <p class="text-sm">{{ item?.content }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'
import { Icon } from "@/plugins/ui"

const items = [
    {
        name: 'J Lems',
        content: 'Owner',
        src: 'https://images.marktplaats.com/api/v1/dm-profile-mp-p/images/1b/1bda9a97-21ad-46c8-917e-a4f14b1d63dd?rule=ecg_mp_eps$_82'
    },
    {
        name: 'P Rietveld',
        content: 'NunspSeller/Mechanic/MOT inspector',
        src: 'https://images.marktplaats.com/api/v1/dm-profile-mp-p/images/1b/1bda9a97-21ad-46c8-917e-a4f14b1d63dd?rule=ecg_mp_eps$_82'
    },
    {
        name: 'M Rietveld',
        content: '1st mechanic/MOT inspector',
        src: 'https://images.marktplaats.com/api/v1/dm-profile-mp-p/images/1b/1bda9a97-21ad-46c8-917e-a4f14b1d63dd?rule=ecg_mp_eps$_82'
    },
]
</script>