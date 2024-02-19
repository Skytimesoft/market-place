<template>
    <div class="grow">
        <div class="p-4 lg:p-6 bg-white shadow-md rounded">
            <form>
                <div class="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                    <div>
                        <Select.Native 
                            :options="brands"
                            itemValue="name"
                            defaultOption="Brand"
                            v-model="selectedBrand"
                        />
                    </div>

                    <div>
                        <Select.Native 
                            :options="models"
                            itemValue="name"
                            defaultOption="Model"
                            v-model="selectedModel"
                        />
                    </div>

                    <div class="col-span-2 md:col-span-1">
                        <Select.Native 
                            :options="years"
                            itemValue="name"
                            defaultOption="Year of construction (from)"
                            v-model="selectedYear"
                        />
                    </div>

                    <div class="col-span-2 md:col-span-1">
                        <Radio.Group>
                            <div class="grow">
                                <Radio.Input 
                                    radioIconNone
                                    radioPadding="px-2 py-2 block text-center"
                                    label="All"
                                    value="all"
                                />
                            </div>
                            <div class="grow">
                                <Radio.Input 
                                    radioIconNone
                                    radioPadding="px-2 py-2 block text-center"
                                    label="Purchase"
                                    value="purchase"
                                />
                            </div>
                            <div class="grow">
                                <Radio.Input 
                                    radioIconNone
                                    radioPadding="px-2 py-2 block text-center"
                                    label="Lease"
                                    value="lease"
                                />
                            </div>
                        </Radio.Group>
                    </div>

                    <div>
                        <Select.Native 
                            :options="prices"
                            itemValue="amount"
                            defaultOption="Price"
                            v-model="selectedPrice"
                        />
                    </div>

                    <div>
                        <Select.Native 
                            :options="materials"
                            itemValue="name"
                            defaultOption="Fuels"
                            v-model="selectedMaterial"
                        />
                    </div>
                </div>
            </form>
            <Buttons />
        </div>
    </div>
</template>

<script setup>
import { Select, Radio } from "@/plugins/form"
import { ref, reactive } from "vue"
import Buttons from "./Buttons.vue"

const selectedBrand = ref(null);
const brands = reactive([
    {
        name: 'BMW',
        id: 1
    },
    {
        name: 'Opel',
        id: 2
    },
    {
        name: 'Audi',
        id: 3
    },
])

const selectedModel = ref(null);
const models = reactive([
    {
        name: '1 series',
        id: 1
    },
    {
        name: '2 series',
        id: 2
    },
    {
        name: '3 series',
        id: 3
    },
])

const selectedYear = ref(null);
const years = reactive([
    {
        name: '2024',
        id: 1
    },
    {
        name: '2023',
        id: 2
    },
    {
        name: '2022',
        id: 3
    },
])

const selectedPrice = ref(null);
const prices = reactive([
    {
        amount: '3000',
        id: 1
    },
    {
        amount: '2000',
        id: 2
    },
    {
        amount: '3500',
        id: 3
    },
])

const selectedMaterial = ref(null);
const materials = reactive([
{
        name: 'Diesel',
        id: 1
    },
    {
        name: 'Benzine',
        id: 2
    },
    {
        name: 'LPG',
        id: 3
    },
])
</script>