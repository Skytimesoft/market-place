<template>
    <div class="bg-white rounded p-4">
        <ul class="columns-2 lg:columns-5 xl::columns-7 gap-x-4 lg:gap-x-10">
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