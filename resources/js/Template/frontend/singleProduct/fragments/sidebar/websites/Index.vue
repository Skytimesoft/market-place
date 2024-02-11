<template>
    <div class="p-4">
        <ul class="space-y-2">
            <li
                v-for="item in items"
                :key="item?.content"
                class="text-sm"
            >
                <Link 
                    :href="item?.path"
                    class="text-primary hover:underline flex items-center gap-2"
                >
                    <Icon
                        :name="item?.iconName"
                        size="18"
                    />
                    <span>{{ item?.content }}</span>
                </Link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'
import { Icon } from "@/plugins/ui"

const items = [
    {
        path: '',
        iconName: 'PhMapPin',
        content: 'Nunspeet'
    },
    {
        path: '',
        iconName: 'PhGlobe',
        content: 'www.autogarantnunspeet.nl/'
    },
    {
        path: '',
        iconName: 'PhCalendar',
        content: 'Request a test drive'
    }
]
</script>