<template>
    <div class="mt-10 flex gap-2 justify-end">
        <Button.Primary :icon="{
            name: 'PhPlus',
            size: 16
        }"
        outline="true"
        class="border-none shadow-none font-bold"
        >
           More filters
        </Button.Primary>

        <Button.Primary :icon="{
            name: 'PhMagnifyingGlass',
            size: 16
        }">
            313,2343 cars
        </Button.Primary>
    </div>
</template>

<script setup>
import { Button } from "@/plugins/ui"
</script>