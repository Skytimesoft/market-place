<template>
    <div class="hidden lg:flex gap-4 items-center">
        <ul class="flex items-start gap-1">
            <li 
                v-for="rightMenu of rightMenus" 
                :key="rightMenu?.label" 
                class="px-2 py-1 bg-white rounded transition-all hover:bg-gray-100"
            >
                <Link 
                    :href="rightMenu?.url" 
                    class="flex items-center gap-1"
                >
                    <Icon 
                        :name="rightMenu?.icon" 
                        :size="16" 
                    />
                    <span class="text-xs text-primary">
                        {{ rightMenu?.label }}
                    </span>
                </Link>
            </li>
        </ul>
        <Button.Primary
            :icon="{
                name: 'PhPushPin',
                size: 16,
                weight: 'fill'
            }"
        >
            <span>Place advertisement</span>
        </Button.Primary>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'
import { Icon, Button } from "@/plugins/ui"

const rightMenus = [
    {
        icon: 'PhChatsCircle',
        label: 'Report',
        url: '/',
    },
    {
        icon: 'PhBell',
        label: 'Notifications',
        url: '/'
    },
    {
        icon: 'PhUser',
        label: 'Login',
        url: '/account/login'
    }
];
</script>