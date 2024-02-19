<template>
    <Layout>
        <div class="py-12">
            <div class="custom-container">
                <div class="max-w-[500px] m-auto">
                    <h1 class="text-center text-2xl lg:text-3xl font-semibold">
                        Password Reset
                    </h1>
                    <div class="bg-white shadow-md rounded p-4 lg:p-8 mt-7">
                        <h2 class="text-lg lg:text-xl font-medium">
                            Enter your email address to reset your password
                        </h2>
                        <div class="mt-4 mb-2">
                            <label class="mb-1 text-black/60 font-semibold block">
                                Email address
                            </label>
                            <Input.Native />
                        </div>
                        <p class="text-sm text-heading/80">
                            We will send a link to the e-mail address you entered. 
                            Use this link to set a new password.
                        </p>
                        <div class="mt-5">
                            <Button.Primary 
                                class="w-full"
                            >
                                Reset Password 
                            </Button.Primary>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script setup>
import Layout from '@/Template/frontend/layout/Index.vue'
import { Input } from "@/plugins/form"
import { Button } from "@/plugins/ui"
</script>