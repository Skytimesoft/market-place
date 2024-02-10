<template>
    <div class="flex justify-between items-center gap-3 pt-1.5 pb-3 mb-3 border-b border-borderLight">
        <div class="flex items-center gap-7">
            <p 
                v-for="data in metaData"
                :key="data?.content"
                class="flex items-center gap-x-2 text-content text-sm"
            >
                <Icon
                    :name="data?.iconName"
                    size="16"
                />
                <span>{{ data?.content }}</span>
            </p>
        </div>
        <div class="text-xl font-bold">
            € 16.249
        </div>
    </div>
</template>

<script setup>
import { Icon } from "@/plugins/ui"

const metaData = [
    {
        iconName: "eye",
        content: "28"
    },
    {
        iconName: "heart",
        content: "3"
    },
    {
        iconName: "clock",
        content: "since Feb. 10. '24, 16:43"
    },
]
</script>