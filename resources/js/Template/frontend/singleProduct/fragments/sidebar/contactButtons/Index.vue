<template>
    <div class="p-4 space-y-3">
        <div>
            <Button.Primary
                :icon="{
                    name: 'PhChatsCircle',
                    size: 18
                }"
                outline="true"
                class="font-bold w-full"
            >
                <span>Message</span>
            </Button.Primary>
        </div>
    
        <div>
            <Button.Primary
                :icon="{
                    name: 'PhGlobe',
                    size: 18
                }"
                outline="true"
                class="font-bold w-full"
            >
                <span>Website</span>
            </Button.Primary>
        </div>

        <div>
            <Button.Primary
                :icon="{
                    name: 'PhPhone',
                    size: 18
                }"
                class="font-bold w-full"
            >
                <span>Show number</span>
            </Button.Primary>
        </div>
    </div>
</template>

<script setup>
import { Button } from '@/plugins/ui'
</script>