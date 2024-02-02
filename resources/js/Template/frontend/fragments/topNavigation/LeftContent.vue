<template>
    <div class="flex gap-4 items-center">
        <Logo />
        <ul class="flex items-start">
            <li 
                v-for="primaryMenu of primaryMenus" 
                :key="primaryMenu?.label" 
                class="px-2 bg-white transition-all hover:bg-gray-100"
            >
                <Link 
                    :href="primaryMenu?.url"
                    class="text-xs text-primary"
                >
                    {{ primaryMenu?.label }}
                </Link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import Logo from '@/Template/frontend/fragments/Logo.vue';

const primaryMenus = [
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