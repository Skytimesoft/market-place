<template>
    <div class="flex gap-4 items-center">
        <Logo />
        <ul class="flex items-start">
            <li 
                v-for="leftMenu of leftMenus" 
                :key="leftMenu?.label" 
                class="px-2 bg-white rounded transition-all hover:bg-gray-100"
            >
                <Link 
                    :href="leftMenu?.url"
                    class="text-xs text-primary"
                >
                    {{ leftMenu?.label }}
                </Link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import Logo from '@/Template/frontend/fragments/Logo.vue';

const leftMenus = [
    {
        label: 'Help & Info',
        url: '/'
    },
    {
        label: 'Conditions',
        url: '/'
    },
    {
        label: 'Safety Center',
        url: '/'
    }
];
</script>