<template>
    <div class="bg-white p-4">
        <ul class="columns-7 gap-x-10">
            <li 
                v-for="n in 100" 
                :key="index"
            >
                <Link 
                    href="/" 
                    class="text-sm hover:underline hover:text-primary"
                >
                Aston Martin
                </Link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
</script>