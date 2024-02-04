<template>
    <Button.Base
        :loading="loading"
        :to="to"
        :class="
            outline 
                ? 'bg-white hover:bg-primary text-primary border-primary'
                : 'bg-primary/20 border-primary text-white hover:bg-primary/90'
        "
    >
        <slot></slot>
    </Button.Base>
</template>

<script setup>
    import { Button } from '@/plugins/ui'
    defineProps({
        loading: {
            type: Boolean,
            default: false,
        },
        outline: Boolean,
        to: [Object, String]
    })
</script>