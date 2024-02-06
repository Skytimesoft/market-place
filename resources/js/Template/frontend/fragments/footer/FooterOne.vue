<template>
    <div>
        <Logo :footer="true" />
        <ul class="my-4 space-y-2">
            <li 
                v-for="menu of actionMenus" 
                :key="menu?.label"
            >
                <Link 
                    :href="menu?.path" 
                    class="flex items-center gap-2 hover:underline hover:text-white"
                >
                    <Icon 
                        :name="menu?.icon" 
                        :size="16" 
                    />
                    <span>
                        {{ menu?.label }}
                    </span>
                </Link>
            </li>
        </ul>

        <ul class="flex items-center gap-2 ">
            <li 
                v-for="icon of socialIcons" 
                :key="icon?.name"
                class="bg-white rounded-full w-7 h-7 grid place-content-center text-primary/70 hover:text-primary/100"
            >
                <Link :href="icon?.path">
                    <Icon 
                        :name="icon?.name" 
                        :size="16"
                    />
                </Link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { Icon } from "@/plugins/ui"
import { Link } from '@inertiajs/vue3'
import Logo from '@/Template/frontend/fragments/Logo.vue'

const actionMenus = [
    {
        icon: 'PhPhone',
        label: '0000-1111-0000',
        path: 'tel:0000-1111-0000'
    },
    {
        icon: 'PhEnvelope',
        label: 'info@domain.com',
        path: 'mailto:info@domain.com'
    },
    {
        icon: 'PhMapPin',
        label: 'Uk, London',
        path: '/'
    }
]

const socialIcons = [
    {
        name: 'PhFacebookLogo',
        path: 'https://www.facebook.com/'
    },
    {
        name: 'PhInstagramLogo',
        path: 'https://www.instagram.com/'
    },
    {
        name: 'PhTwitterLogo',
        path: 'https://www.twitter.com/'
    },
]
</script>