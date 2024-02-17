<template>
    <Layout>
        <div class="my-12">
            <div class="custom-container">
                <div class="flex items-start gap-5">
                    <div class="flex-shrink-0 w-[300px] bg-white shadow-md rounded p-4">
                        <ul class="space-y-2">
                            <li>
                                <Link
                                    href="#jouw"
                                    class="text-sm text-primary hover:underline"
                                >
                                    Jouw persoonsgegevens bij Marktplaats
                                </Link>
                            </li>
                            <li 
                                v-for="n in 5"
                            >
                                <Link
                                    href="#lorem"
                                    class="text-sm text-primary hover:underline"
                                >
                                    Lorem, ipsum dolor Lorem, ipsum dolor Lorem, ipsum dolor
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div class="grow bg-white shadow-md rounded p-7">
                        <h1 class="text-3xl font-semibold">
                            Privacy Policy
                        </h1>
                        <div>
                            <div id="jouw" class="my-5">
                                <h3 class="mb-3 text-lg font-medium">
                                    Jouw persoonsgegevens bij Marktplaats
                                </h3>
                                <div>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed minus quo in eos quae
                                        doloribus assumenda ea odio perferendis dolor.
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed minus quo in eos quae
                                        doloribus assumenda ea odio perferendis dolor.
                                    </p>

                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed minus quo in eos quae
                                        doloribus assumenda ea odio perferendis dolor.
                                    </p>
                                </div>
                            </div>

                            <div 
                                id="lorem" 
                                class="my-5"
                                v-for="n in 10"
                            >
                                <h3 class="mb-3 text-lg font-medium">
                                    Lorem, ipsum dolor
                                </h3>
                                <div>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed minus quo in eos quae
                                        doloribus assumenda ea odio perferendis dolor.
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed minus quo in eos quae
                                        doloribus assumenda ea odio perferendis dolor.
                                    </p>

                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed minus quo in eos quae
                                        doloribus assumenda ea odio perferendis dolor.
                                    </p>
                                </div>
                            </div>

                            <div class="my-5">
                                <h3 class="mb-3 text-lg font-medium">
                                    Jouw persoonsgegevens bij Marktplaats
                                </h3>
                                <div>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed minus quo in eos quae
                                        doloribus assumenda ea odio perferendis dolor.
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed minus quo in eos quae
                                        doloribus assumenda ea odio perferendis dolor.
                                    </p>

                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed minus quo in eos quae
                                        doloribus assumenda ea odio perferendis dolor.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>


<script setup>
import { Link } from "@inertiajs/vue3"
import Layout from '@/Template/frontend/layout/Index.vue'
</script>

<style scoped>
div:has(p) p {
  @apply text-sm
}
div:has(p) p:not(:first-child) {
  @apply mt-3
}
</style>