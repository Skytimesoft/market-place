<template>
    <ul class="grid grid-cols-2 gap-4 lg:gap-0 lg:flex lg:divide-x lg:divide-borderLight">
        <li 
            v-for="item in items"
            :key="items?.title"
            class="lg:px-5 first:pl-0 last:pr-0"
        >
            <h5 class="text-xs text-content mb-0.5">{{ item?.title }}</h5>
            <p class="text-sm font-semibold">{{ item?.content }}</p>
        </li>
    </ul>
</template>

<script setup>
const items = [
    {
        title: "Year",
        content: "2024"
    },
    {
        title: "KM reading",
        content: "168.527 km"
    },
    {
        title: "Fuel",
        content: "Petrol"
    },
    {
        title: "Transmission",
        content: "Manual 6-speed gearbox"
    },
    {
        title: "Bodywork",
        content: "Convertible"
    },
]
</script>