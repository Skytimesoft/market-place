<template>
    <div class="flex gap-4 items-center">
        <ul class="flex items-start">
            <li 
                v-for="primaryMenu of primaryMenus" 
                :key="primaryMenu?.label" 
                class="px-2"
            >
                <router-link 
                    :to="primaryMenu?.url" 
                    class="flex items-center gap-1"
                >
                    <Icon 
                        :name="primaryMenu?.icon" 
                        :size="16" 
                    />
                    <span class="text-xs">
                        {{ primaryMenu?.label }}
                    </span>
                </router-link>
            </li>
        </ul>
        <Button.Primary
            :icon="{
                name: 'PhPushPin',
                size: 16,
                color: 'lightgreen',
                weight: 'fill',
                spin: true
            }"
        >
            <span>Place advertisement</span>
        </Button.Primary>
    </div>
</template>

<script setup>
import { Icon, Button } from "@/plugins/ui";
import { PhPushPin } from '@phosphor-icons/vue'


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