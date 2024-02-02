<template>
    <div 
        class="flex divide-x divide-black/50 border border-black/50"
        :class="vertical ? 'flex-col' : ''"
    >
        <slot></slot>
    </div>
</template>

<script setup>
    import { provide } from 'vue'

    defineOptions({
        inheritAttrs: false,
        name: 'GroupField'
    })

    defineProps({
        vertical: {
            type: Boolean,
            default: false
        }
    })

    /*global defineModel*/
    const modelValue = defineModel()
    const setModelValue = (value) => {
        modelValue.value = value
    }
    provide('modelValue', {
        modelValue,
        setModelValue
    })
</script>