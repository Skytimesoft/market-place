<template>
    <div>
        <h4 class="mb-4 text-xl font-bold text-white">Useful links</h4>
        <ul class="space-y-1">
            <li v-for="link in quickLinks" :key="link?.name" class="hover:underline hover:text-white">
                <Link :href="link?.path">
                    {{ link?.name }}
                </Link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3"

const quickLinks = [
    {
        name: 'Privacy statement',
        path: '/privacy-policy'
    },
    {
        name: 'Cookie Policy',
        path: ''
    },
    {
        name: 'Privacy Preferences',
        path: ''
    },
    {
        name: 'Safe and Successful',
        path: ''
    },
    {
        name: 'Careers',
        path: ''
    },
    {
        name: 'Conditions',
        path: ''
    },
]
</script>