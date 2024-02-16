<template>
    <div>
        <h4 class="font-semibold mb-4">Price</h4>
        <div class="flex gap-2">
            <Select.Native 
                :options="prices"
                itemValue="value"
                defaultOption="From"
                v-model="selectedYear"
            />
            <Select.Native 
                :options="prices"
                itemValue="value"
                defaultOption="Until"
                v-model="selectedYear"
            />
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue"
import { Select } from "@/plugins/form"

const selectedYear = ref(null);
const prices = reactive([
    {
        value: 'All',
        id: 1
    },
    {
        value: '150',
        id: 2
    },
    {
        value: '250',
        id: 3
    },
    {
        value: '500',
        id: 4
    },
])
</script>