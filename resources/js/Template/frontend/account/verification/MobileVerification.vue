<template>
    <Layout>
        <div class="py-12">
            <div class="custom-container">
                <div class="max-w-[500px] m-auto">
                    <div class="bg-white shadow-md rounded p-8">
                        <h2 class="text-2xl font-semibold text-center">
                            Setting up extra security
                        </h2>
                        <div class="my-5 text-sm">
                            <p class="text-heading/90">
                                Enter your phone number below for extra security of your account.
                            </p>
                            <p class="mt-3 text-heading/90">
                                This allows you to log in to your account in two steps using a code that you will receive by
                                SMS. We only use your phone number for the security of your account.
                            </p>
                        </div>

                        <div class="flex gap-2">
                            <div>
                                <label class="mb-1 text-black/60 font-semibold block">
                                    Country code
                                </label>
                                <Select.Native 
                                    :options="countryCode"
                                    itemValue="name"
                                    defaultOption="NL +31"
                                    v-model="selectedCountryCode"
                                />
                            </div>
                            <div class="grow">
                                <label class="mb-1 text-black/60 font-semibold block">
                                    Telephone number
                                </label>
                                <Input.Native />
                            </div>
                        </div>

                        <div class="mt-5">
                            <Button.Primary  
                                class="w-full"
                            >
                                Send
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
import { Select, Input } from "@/plugins/form"
import { Button } from "@/plugins/ui"
import { ref, reactive } from "vue" 

const selectedCountryCode = ref(null);
const countryCode = reactive([
    {
        name: 'AT +43',
        id: 2
    },
    {
        name: 'BE +32',
        id: 3
    },
])
</script>