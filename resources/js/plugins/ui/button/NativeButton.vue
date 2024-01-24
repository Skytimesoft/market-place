<template>
    <Link
        v-if="to"
        :class="[
            loading ? 'pointer-events-none opacity-70' : '',
            (!isEmpty(icon) && (icon.position == 'top' || icon.position == 'bottom')) ? 'flex flex-col items-center' : ''
        ]"
        :to="to"
    >
        <ButtonContent
            :icon="icon"
            :loading="loading"
        >
            <slot></slot>
        </ButtonContent>
    </Link>
    <button 
        v-else
        :class="[
            loading ? 'pointer-events-none opacity-70' : '',
            (!isEmpty(icon) && (icon.position == 'top' || icon.position == 'bottom')) ? 'flex flex-col items-center' : ''
        ]"
    >
        <ButtonContent
            :icon="icon"
            :loading="loading"
        >
            <slot></slot>
        </ButtonContent>
    </button>
</template>

<script setup>
    import { Link } from '@inertiajs/vue3'
    import ButtonContent from './ButtonContent.vue'
    import { isEmpty } from 'lodash'

    defineProps({
        loading: Boolean,
        to: [Object, String],
        icon: Object
    })
</script>