<template>
    <div class="p-5 text-sm flex justify-between items-center">
        <p>Number: m2079427677</p>
        <Link 
            href=""
            class="flex items-center gap-1.5 text-primary hover:underline"
        >
            <Icon
                name="PhWarning"
                size="20"
            />
            <span>Report to Marktplaats</span>
        </Link>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'
import { Icon } from "@/plugins/ui"
</script>