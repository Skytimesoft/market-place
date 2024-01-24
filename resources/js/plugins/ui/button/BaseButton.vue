<template>
    <RouterLink
        v-if="to"
        class="px-3 py-1 rounded border shadow hover:shadow-lg active:scale-95 duration-300 select-none inline-flex items-center justify-center gap-2"
        :class="loading ? 'pointer-events-none opacity-70' : ''"
        :to="to"
    >
        <slot></slot>
    </RouterLink>
    <button 
        v-else
        class="px-4 py-1 rounded border shadow hover:shadow-lg active:scale-95 duration-300 select-none inline-flex items-center justify-center gap-2"
        :class="loading ? 'pointer-events-none opacity-70' : ''"
    >
        <slot></slot>
        
        <Loader 
            :loading="loading"
            class="text-xl"
        />
    </button>
</template>

<script setup>
    import { Loader } from '@/plugins/ui'
    defineProps({
        loading: {
            type: Boolean,
            default: false,
        },
        to: [Object, String]
    })
</script>