<template>
    <div class="flex gap-4 items-center">
        <ul class="flex items-start gap-1">
            <li 
                v-for="primaryMenu of primaryMenus" 
                :key="primaryMenu?.label" 
                class="px-2 py-1 bg-white transition-all hover:bg-gray-100"
            >
                <Link 
                    :to="primaryMenu?.url" 
                    class="flex items-center gap-1"
                >
                    <Icon 
                        :name="primaryMenu?.icon" 
                        :size="16" 
                    />
                    <span class="text-xs text-primary">
                        {{ primaryMenu?.label }}
                    </span>
                </Link>
            </li>
        </ul>
        <Button.Primary
            :icon="{
                name: 'PhPushPin',
                size: 16,
                color: '#fff',
                weight: 'fill',
                spin: true
            }"
        >
            <span>Place advertisement</span>
        </Button.Primary>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import { Icon, Button } from "@/plugins/ui";

const primaryMenus = [
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
        url: '/'
    }
];
</script>