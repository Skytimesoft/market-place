<template>
    <div>
        <h4 class="mb-4 text-xl font-bold text-white">Download our app</h4>
        <ul class="space-y-2">
            <li v-for="logo in logos" :key="logo?.path">
                <Link :to="logo?.path">
                    <Img 
                        :src="logo?.src"
                        :alt="logo?.alt" 
                        class="w-[160px]"
                    />
                </Link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3"
import { Img } from '@/plugins/ui'

const logos = [
    {
        path: '',
        alt: 'Android logo',
        src: 'https://cdn.ebayclassifieds.net/bff/static/vendor/hz-web-ui/mp/assets/google-play--nlnl.3b25ffba.svg',
    },
    {
        path: '',
        alt: 'Android logo',
        src: 'https://cdn.ebayclassifieds.net/bff/static/vendor/hz-web-ui/mp/assets/app-store--nlnl.733df1c0.svg',
    },
]
</script>