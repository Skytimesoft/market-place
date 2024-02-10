<template>
    <div class="py-5">
        <nav class="flex gap-2 items-center text-sm">
            <Button.Native
                :icon="{
                    name: 'PhArrowLeft',
                    size: 12,
                }"
                class="rounded-full border border-borderDark p-1 hover:border-primary"
            >
            </Button.Native>

            <Link href="/">Home</Link>
            <Icon
                name="caretRight"
            />
            <Link href="">Cars</Link>
            <Icon
                name="caretRight"
            />
            <Link href="">Audi</Link>
            <Icon
                name="caretRight"
            />
            <Link href="">Audi 5</Link>
            <Icon
                name="caretRight"
            />
            <p href="">Advert m2079427677</p>
        </nav>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'
import { Icon, Button } from "@/plugins/ui"
</script>

<style scoped>
a {
    @apply hover:underline text-primary
}
</style>