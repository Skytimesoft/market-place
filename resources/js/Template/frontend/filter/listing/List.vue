<template>
    <div class="grid grid-cols-2 gap-3">
        <article 
            v-for="(n, index) in 10"
            :key="index"
            class="relative rounded overflow-hidden shadow-md"
        >
            <Link href="/single-product" class="absolute inset-0 z-50"></Link>
            <div class="bg-white shadow-md">
                <Img 
                    src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fHww"
                    alt="Car" 
                    class="h-[170px]"
                />
                <div class="p-4">
                    <h4 class="text-[15px] text-primary font-medium ellipsis-text">
                        {{ printString('Classic English Side Tables by Mahogany') }}
                    </h4>
                    <p class="my-2 pb-2 border-b border-borderLight font-semibold">{{ printPrice('900') }}</p>
                    <p class="text-sm text-content font-medium">Top Advertisement</p>
                    <div class="mt-1.5 space-y-1 text-[13px]">
                        <p class="flex items-center gap-2 text-content">
                            <Icon
                                name="PhMapPin"
                            />
                            <p>Netherlands</p>
                        </p>
                        <p class="flex items-center gap-2 text-content">
                            <Icon
                                name="PhMapPin"
                            />
                            <p>Today</p>
                        </p>
                        <Link 
                            href="" 
                            class="flex items-center gap-2 text-primary"
                        >
                            <Icon
                                name="PhGlobe"
                            />
                            <p>Go to Website</p>
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'
import { Img, Icon } from '@/plugins/ui'
import { printString, printPrice } from '@/utilities/helper'
</script>