<template>
    <div class="max-w-[500px] m-auto">
        <div class="bg-white shadow-md rounded p-8 mt-7">
            <div class="flex justify-center items-center gap-3 bg-success/20 rounded p-3">
                <Icon 
                    name="PhCheckCircle" 
                    size="22" 
                    color="#216C50"
                    weight="fill"
                />
                <p class="text-xl font-medium text-success">
                    Account created successfully
                </p>
            </div>
            
            <div>
                <h2 class="mt-10 mb-3 text-2xl font-semibold">
                    Check your email
                </h2>
                <p class="text-heading/90">
                    An email has been sent to your email address. 
                    Use the link in the email to access My Marketplace.
                </p>
                <div class="mt-5">
                    <Button.Primary 
                        href="/"
                        class="w-full"
                    >
                        Go to Home
                    </Button.Primary>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Layout from '@/Template/frontend/layout/Index.vue'
import { Button, Icon } from "@/plugins/ui"
</script>