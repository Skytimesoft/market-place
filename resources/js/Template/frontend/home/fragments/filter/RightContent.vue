<template>
    <div class="lg:w-[230px] lg:shrink-0 p-5 bg-white shadow-md rounded">
        <h3 class="font-semibold text-lg">Sell your current car</h3>
        <p class="mt-1.5 text-sm">Enter your license plate number and place your advertisement or check what it's worth.</p>
        <div class="relative my-6">
            <div class="absolute left-0 top-0 bg-primary/90 h-full py-1 px-1.5 rounded-l text-center">
                <PhCircleDashed color="#C6B45F" />
                <p class="mt-.5 text-[10px] text-white font-medium">NL</p>
            </div>
            <input name="licensePlate" type="text" value="" class="bg-[#F5CC4D] rounded pl-8 w-full">
        </div>
        <div class="flex justify-between gap-2 items-center">
            <Link href="/" class="text-sm text-primary hover:underline">Check waarde</Link>
            <Button.Primary outline="true" class="font-bold">
                Plaats
            </Button.Primary>
        </div>
    </div>
</template>


<script setup>
import { Link } from '@inertiajs/vue3'
import { Button } from "@/plugins/ui"
import { PhCircleDashed } from '@phosphor-icons/vue'
</script>