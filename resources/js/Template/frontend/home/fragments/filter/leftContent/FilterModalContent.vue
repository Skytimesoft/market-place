<template>
    <div class="py-4 px-4 lg:px-6">
        <form class="space-y-3 lg:space-y-4">
            <div class="grid grid-cols-2 gap-3 lg:gap-4">
                <div>
                    <label class="mb-1 text-black/60 font-semibold block">Brand</label>
                    <Select.Native 
                        :options="brands"
                        itemValue="name"
                        defaultOption="Brand"
                        v-model="selectedBrand"
                    />
                </div>

                <div>
                    <label class="mb-1 text-black/60 font-semibold block">Model</label>
                    <Select.Native 
                        :options="models"
                        itemValue="name"
                        defaultOption="Model"
                        v-model="selectedModel"
                    />
                </div>
            </div>

            <div>
                <label class="mb-1 text-black/60 font-semibold block">Type of advertisement</label>
                <Radio.Group>
                    <div class="grow">
                        <Radio.Input 
                            radioIconNone
                            radioPadding="p-2 block text-center"
                            label="For sale"
                            value="forSale"
                        />
                    </div>
                    <div class="grow">
                        <Radio.Input 
                            radioIconNone
                            radioPadding="p-2 block text-center"
                            label="Lease"
                            value="lease"
                        />
                    </div>
                </Radio.Group>
            </div>

            <div class="grid grid-cols-2 gap-3 lg:gap-4">
                <div>
                    <label class="mb-1 text-black/60 font-semibold block">Price (of)</label>
                    <div class="flex relative">
                        <p class="absolute top-1/2 -translate-y-1/2 left-3 h-full grid place-content-center">{{ printPrice('') }}</p>
                        <Input.Native class="pl-5" />
                    </div>
                </div>
                <div>
                    <label class="mb-1 text-black/60 font-semibold block">Price (until)</label>
                    <div class="flex relative">
                        <p class="absolute top-1/2 -translate-y-1/2 left-3 h-full grid place-content-center">{{ printPrice('') }}</p>
                        <Input.Native class="pl-5" />
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-3 lg:gap-4">
                <div>
                    <label class="mb-1 text-black/60 font-semibold block">Year (of)</label>
                    <Select.Native 
                        :options="years"
                        itemValue="name"
                        defaultOption="All"
                        v-model="selectedYear"
                    />
                </div>
                <div>
                    <label class="mb-1 text-black/60 font-semibold block">Year (until)</label>
                    <Select.Native 
                        :options="years"
                        itemValue="name"
                        defaultOption="All"
                        v-model="selectedYear"
                    />
                </div>
            </div>

            <div class="grid grid-cols-2 gap-3 lg:gap-4">
                <div>
                    <label class="mb-1 text-black/60 font-semibold block">Mileage(of)</label>
                    <div class="flex relative">
                        <Input.Native class="pl-5" />
                        <p class="absolute top-1/2 -translate-y-1/2 right-3 h-full grid place-content-center">Km</p>
                    </div>
                </div>
                <div>
                    <label class="mb-1 text-black/60 font-semibold block">Mileage(until)</label>
                    <div class="flex relative">
                        <Input.Native />
                        <p class="absolute top-1/2 -translate-y-1/2 right-3 h-full grid place-content-center">Km</p>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <div class="flex justify-between border-t border-borderDark/20 px-6 py-4">
        <Button.Primary outline="true">
            Clear filters
        </Button.Primary>
        <Button.Primary>
            202,365 cars
        </Button.Primary>
    </div>
</template>


<script setup>
import { Select, Radio, Input } from "@/plugins/form"
import { Button } from "@/plugins/ui"
import { printPrice } from '@/utilities/helper'
import { ref, reactive } from "vue"

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