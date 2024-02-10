<template>
    <section class="py-8">
        <div class="custom-container">
            <h4 class="text-lg font-bold mb-4">Popular search terms</h4>
            <ul class="columns-5 gap-x-7">
                <li 
                    v-for="n in 30" 
                    :key="index"
                >
                    <Link 
                        href="/" 
                        class="text-sm text-primary hover:underline"
                    >
                        Aston Martin
                    </Link>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { Link } from "@inertiajs/vue3"
</script>