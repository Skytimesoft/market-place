<template>
    <div class="grow bg-white rounded divide-y divide-borderLight">
        <ListingHeader />
        <ProductGallery />
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
import ProductGallery from "./productGallery/Index.vue"
</script>