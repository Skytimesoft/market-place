<template>
    <ul class="grid grid-cols-3 gap-5">
        <li 
            v-for="item in items"
            :key="items?.title"
            class="flex items-center gap-3 first:col-span-3"
        >
            <Icon
                :name="item?.iconName"
                size="24"
                color="#606060"
            />
            <div>
                <h5 class="text-sm text-content mb-0.5">{{ item?.title }}</h5>
                <p class="text-base font-semibold">{{ item?.content }}</p>
            </div>
        </li>
    </ul>
</template>

<script setup>
import { Icon } from "@/plugins/ui"

const items = [
    {
        iconName: "car",
        title: "Make & Model, version",
        content: "Audi A5, Cabriolet 1.8 TFSI Pro Line S-Line/DAB+/ROTOR/PDC/XENON/VERY FULL!!"
    },
    {
        iconName: "calendar",
        title: "Year",
        content: "2012"
    },
    {
        iconName: "gauge",
        title: "KM reading",
        content: "168.527 km"
    },
    {
        iconName: "gasPump",
        title: "Fuel",
        content: "Petrol"
    },
    {
        iconName: "sliders",
        title: "Transmission",
        content: "Manual 6-speed gearbox"
    },
    {
        iconName: "engine",
        title: "Engine size",
        content: "1.8 litres"
    },
]
</script>