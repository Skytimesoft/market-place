<template>
    <div class="border-b border-borderDark/20 py-5">
        <div class="custom-container">
            <div class="flex gap-2 items-center justify-center">
                <div>
                    <Input.Native 
                        placeholder="Search categories"
                        class="border-borderDark/20" 
                    />
                </div>
                <div>
                    <Select.Native 
                        :options="categories"
                        itemValue="name"
                        defaultOption="All category"
                        v-model="selectedCategory"
                        class="border-borderDark/20 bg-white"
                    />
                </div>
                <div>
                    <Input.Native 
                        placeholder="Zip code" 
                        class="border-borderDark/20"
                    />
                </div>
                <div>
                    <Select.Native 
                        :options="distances"
                        itemValue="value"
                        defaultOption="All distances"
                        v-model="selectedDistance"
                        class="border-borderDark/20 bg-white"
                    />
                </div>
                <div>
                    <Button.Primary>
                        Clear filters
                    </Button.Primary>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Select, Input } from "@/plugins/form"
import { Button } from "@/plugins/ui"
import { ref } from "vue"

const selectedCategory = ref(null);
const categories = ref([
    {
        name: 'Cars',
        id: 1
    },
    {
        name: 'Book',
        id: 2
    },
    {
        name: 'Audio, TV',
        id: 3
    },
])

const selectedDistance = ref(null);
const distances = ref([
    {
        value: '< 3 km',
        id: 1
    },
    {
        value: '< 5 km',
        id: 2
    },
    {
        value: '< 10 km',
        id: 3
    },
])
</script>