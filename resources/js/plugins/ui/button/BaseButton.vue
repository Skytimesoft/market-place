<template>
    <Button.Native
        class="px-3 py-2 text-sm rounded border shadow hover:shadow-lg active:scale-95 duration-300 select-none inline-flex items-center justify-center gap-2"
    >
        <slot></slot>
    </Button.Native>
</template>

<script setup>
    import { Button } from '@/plugins/ui'

    defineProps({
        loading: {
            type: Boolean,
            default: false,
        },
        to: [Object, String]
    })
</script>