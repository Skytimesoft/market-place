<template>
    <div class="grow bg-white rounded divide-y divide-borderLight">
        <ListingHeader />
        <InspectionService />
        <Highlights />
        <Description />
    </div>
</template>

<script setup>
import ListingHeader from "./header/Index.vue"
import InspectionService from "./inspectionService/Index.vue"
import Highlights from "./highlights/Index.vue"
import Description from "./description/Index.vue"
</script>