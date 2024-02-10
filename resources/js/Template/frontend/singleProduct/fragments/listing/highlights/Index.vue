<template>
    <div class="p-5">
        <h4 class="text-lg font-bold mb-4">Highlights</h4>
        <ul class="grid grid-cols-2 gap-x-4 gap-y-2">
            <li 
                v-for="item in items"
                :key="items?.content"
                class="flex items-center gap-2"
            >
                <Icon
                    :name="item?.iconName"
                    size="16"
                />
                <p class="text-sm font-semibold">{{ item?.content }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { Icon } from "@/plugins/ui"

const items = [
    {
        iconName: "checks",
        content: "Financing possible with provider"
    },
    {
        iconName: "checks",
        content: "Financing possible with provider"
    },
    {
        iconName: "checks",
        content: "Financing possible with provider"
    },
    {
        iconName: "checks",
        content: "Financing possible with provider"
    }
]
</script>