<template>
    <div class="grow">
        <FilterBarVue />
        <div class="my-4 p-4 rounded border border-borderLight flex justify-between items-center gap-4">
            <p class="text-sm">
                The order of the results is partly determined by paid eye-catching opportunities.
            </p>
            <Button.Native
                :icon="{
                    name: 'PhX',
                    size: 14,
                    color: '#277ABA'
                }"
            >
            </Button.Native>
        </div>
        <List />
    </div>
</template>

<script setup>
import { Button } from "@/plugins/ui"
import FilterBarVue from "./FilterBar.vue"
import List from "./List.vue"
</script>