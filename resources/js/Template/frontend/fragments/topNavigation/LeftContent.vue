<template>
    <div class="flex gap-4 items-center">
        <Logo />
        <ul class="flex items-start">
            <li 
                v-for="primaryMenu of primaryMenus" 
                :key="primaryMenu?.label" 
                class="text-xs px-2"
            >
                <Link 
                    :href="primaryMenu?.url"
                >
                    {{ primaryMenu?.label }}
                </Link>
            </li>
        </ul>
    </div>
</template>

<script setup>
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