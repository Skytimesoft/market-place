<template>
    <div class="p-4">
        <h4 class="mb-2 font-bold">Offer</h4>
        <form>
            <div class="space-y-4">
                <div class="flex relative">
                    <p class="absolute top-1/2 -translate-y-1/2 left-3 h-full grid place-content-center">
                        {{ printPrice('')}}
                    </p>
                    <Input.Native 
                        class="pl-6 border-borderDark/50 rounded" 
                    />
                </div>

                <div>
                    <label class="mb-2 text-content block">Telephone number</label>
                    <Input.Native 
                        class="border-borderDark/50 rounded" 
                    />
                </div>

                <div>
                    <Button.Primary
                        :icon="{
                            name: 'PhGavel',
                            size: 18
                        }"
                        outline="true"
                        class="font-bold w-full"
                    >
                        <span>Place bid</span>
                    </Button.Primary>
                </div>

                <p class="text-sm text-center text-content">No bids placed</p>
            </div>
        </form>
    </div>
</template>

<script setup>
import { Select, Radio, Input } from "@/plugins/form"
import { Button } from "@/plugins/ui"
import { printPrice } from '@/utilities/helper'
</script>