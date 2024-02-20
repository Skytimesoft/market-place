<template>
    <div class="p-5">
        <div class="flex flex-col lg:flex-row gap-3">
            <Img
                src="https://cdn.ebayclassifieds.net/bff/static/vendor/hz-web-ui/mp/assets/trust-and-safety/negociate-cars.3543c62a.svg"
                alt="Image"
                class="w-24 flex-shrink-0"
            />
            <div>
                <h5 class="font-bold mb-1">Do you want to know exactly what you're getting into?</h5>
                <p class="text-sm">From €149, Used Car Inspection Netherlands does a complete car inspection.</p>
            </div>
            <Button.Primary 
                href="/"
                outline="true"
                class="font-bold flex-shrink-0"
            >
                Request an inspection
            </Button.Primary>
        </div>
    </div>
</template>

<script setup>
import { Img, Button } from '@/plugins/ui'
</script>