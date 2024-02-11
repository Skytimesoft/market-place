<template>
    <div class="p-5">
        <ListItem />
        <div class="py-6 flex items-center gap-2 text-sm text-content">
            <Icon
                name="PhInfo"
                size="20"
            />
            <span>
                All information is provided by the RDW based on the license plate. Except for the ones with a profile icon
                behind it.
            </span>
        </div>
        <AccordionItems />
    </div>
</template>

<script setup>
import { Icon } from "@/plugins/ui"
import ListItem from "./ListItem.vue"
import AccordionItems from "./AccordionItems.vue"
</script>