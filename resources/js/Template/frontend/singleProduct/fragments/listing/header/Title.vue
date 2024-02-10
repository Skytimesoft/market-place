<template>
    <div class="flex justify-between items-start gap-5">
        <h4 class="text-xl font-semibold">
            Audi A5 Cabriolet 1.8 TFSI Pro Line S-Line/DAB+/ROTOR/PDC/XE
        </h4>
        <Button.Primary
            :icon="{
                name: 'PhHeart',
                size: 16,
            }"
            outline="true"
            class="shrink-0"
        >
        </Button.Primary>
    </div>
</template>

<script setup>
import { Button } from "@/plugins/ui"
</script>