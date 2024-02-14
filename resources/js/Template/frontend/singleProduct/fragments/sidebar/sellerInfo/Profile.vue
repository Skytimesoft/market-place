<template>
    <Button.Primary 
        :icon="{
            name: 'PhUserCircle',
            size: 20
        }"
        outline="true"
        class="flex-shrink-0"
        @click="modalClickHandler"
    >
    </Button.Primary>

    <Modal v-model="isModalOpen">
        <div class="w-[360px] bg-white rounded">
            <div class="p-4 border-b border-borderLight flex justify-between items-center">
                <h4 class="text-xl font-semibold">Log In</h4>
                <Button.Native 
                    :icon="{
                        name: 'PhXCircle',
                        size: 20
                    }"
                    @click="modalClickHandler"
                    class="hover:text-red-700"
                >
                </Button.Native>
            </div>
            <div class="p-4">
                <Login />
            </div>
        </div>
    </Modal>
</template>

<script setup>
import { Button, Modal } from '@/plugins/ui'
import { ref } from "vue"
import Login from "@/Template/frontend/account/login/Index.vue"

const isModalOpen = ref(false)
const modalClickHandler = () => {
    isModalOpen.value = !isModalOpen.value
}
</script>