<template>
    <div class="block m-auto p-6 lg:p-10 text-center bg-white rounded">
        <h4 class="text-2xl font-bold">Your location is unknown</h4>
        <p class="my-3">Enter a zip code on "My profile".</p>
        <div>
            <Button.Primary class="font-bold">
                To my profile
            </Button.Primary>
        </div>
    </div>
</template>

<script setup>
import { Button } from '@/plugins/ui'
</script>