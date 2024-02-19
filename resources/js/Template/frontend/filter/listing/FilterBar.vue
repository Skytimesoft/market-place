<template>
    <div class="flex flex-col lg:flex-row justify-between gap-4">
        <div class="flex gap-2.5 items-center flex-wrap">
            <Button.Primary
                :icon="{
                    name: 'PhX',
                    size: 14,
                    position: 'right'
                }"
                outline="true"
                class="rounded-full bg-primary/10"
                v-for="(n, index) in 3"
                :key="index"
            >
                <span>Cars</span>
            </Button.Primary>
            <Button.Native
                class="text-primary text-sm underline"
            >
                Remove filter
            </Button.Native>
        </div>

        <div class="flex-shrink-0">
            <Select.Native 
                :options="sortItems"
                itemValue="name"
                defaultOption="Sort by standard"
                v-model="selectedSortItem"
                class="text-sm"
            />
        </div>
    </div>
</template>

<script setup>
import { Button } from "@/plugins/ui"
import { Select } from "@/plugins/form"
import { ref, reactive } from "vue" 

const selectedSortItem = ref(null);
const sortItems = reactive([
    {
        name: 'Date (new-old)',
        id: 1
    },
    {
        name: 'Date (old-new)',
        id: 2
    },
    {
        name: 'Price (low-high)',
        id: 3
    },
    {
        name: 'Price (high-low)',
        id: 4
    },
])
</script>