<template>
    <div>
        <h4 class="mb-4 text-xl font-bold text-white">Quick links</h4>
        <ul class="space-y-1">
            <li v-for="link in quickLinks" :key="link?.name" class="hover:underline hover:text-white">
                <Link :to="link?.path">
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
        name: 'Home',
        path: '/'
    },
    {
        name: 'Blog',
        path: ''
    },
    {
        name: 'Marketplace Business',
        path: ''
    },
    {
        name: 'Safe and Successful',
        path: ''
    },
    {
        name: 'Help & Info',
        path: ''
    },
    {
        name: 'Conditions',
        path: ''
    },
]
</script>