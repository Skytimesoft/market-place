<template>
    <div>
        <h4 class="font-semibold mb-4">Range (min.)</h4>
        <div>
            <Select.Native 
                :options="ranges"
                itemValue="value"
                defaultOption="From"
                v-model="selectedRange"
            />
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue"
import { Select } from "@/plugins/form"

const selectedRange = ref(null);
const ranges = reactive([
    {
        value: 'All',
        id: 1
    },
    {
        value: '50 km',
        id: 2
    },
    {
        value: '200 km',
        id: 3
    },
    {
        value: '500 km',
        id: 4
    },
])
</script>