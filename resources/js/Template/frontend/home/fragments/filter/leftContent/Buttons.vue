<template>
    <div class="mt-10 flex gap-2 justify-end">
        <Button.Primary :icon="{
            name: 'PhPlus',
            size: 16
        }"
        outline="true"
        @click="isModalOpen = !isModalOpen"
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

    <Modal
        :modelValue="isModalOpen"
        scrollable
    >
        <div class="bg-white rounded w-[700px]">
            <div class="py-4 px-6 border-b border-borderDark/20 flex justify-between items-center">
                <h4 class="text-xl font-medium">More Filters</h4>
                <Icon 
                    name="PhXCircle" 
                    :size="20" 
                    @click="isModalOpen = !isModalOpen"
                    color="red"
                    class="cursor-pointer"
                />
            </div>

            <FilterModalContent />
        </div>
    </Modal>
</template>

<script setup>
import { ref } from "vue"
import { Icon, Button, Modal } from "@/plugins/ui"
import FilterModalContent from "./FilterModalContent.vue";

const isModalOpen = ref(false)
</script>