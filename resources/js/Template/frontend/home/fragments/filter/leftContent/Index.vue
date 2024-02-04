<template>
    <div class="grow">
        <div class="p-6 bg-white shadow-md">
            <form>
                <div class="grid grid-cols-3 gap-4">
                    <div>
                        <Select.Native 
                            :options="brands"
                            itemValue="name"
                            defaultOption="Brand"
                        />
                    </div>

                    <div>
                        <Select.Native 
                            :options="models"
                            itemValue="name"
                            defaultOption="Model"
                        />
                    </div>

                    <div>
                        <Select.Native 
                            :options="years"
                            itemValue="name"
                            defaultOption="Year of construction (from)"
                        />
                    </div>

                    <div>
                        <Radio.Group>
                            <div>
                                <Radio.Input 
                                    radioIconNone
                                    radioPadding="px-4 py-2 block"
                                    label="All"
                                    value="all"
                                />
                            </div>
                            <div>
                                <Radio.Input 
                                    radioIconNone
                                    radioPadding="px-4 py-2 block"
                                    label="Purchase"
                                    value="purchase"
                                />
                            </div>
                            <div>
                                <Radio.Input 
                                    radioIconNone
                                    radioPadding="px-4 py-2 block"
                                    label="Lease"
                                    value="lease"
                                />
                            </div>
                        </Radio.Group>
                    </div>

                    <div>
                        <Select.Native 
                            :options="years"
                            itemValue="name"
                            defaultOption="Year of construction (from)"
                        />
                    </div>

                    <div>
                        <Select.Native 
                            :options="years"
                            itemValue="name"
                            defaultOption="Year of construction (from)"
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
import { reactive } from "vue"
import Buttons from "./Buttons.vue"

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
</script>