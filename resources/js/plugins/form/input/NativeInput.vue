<template>
    <input
        :id="uid"
        v-bind="$attrs"
        v-model="modelValue"
        class="w-full outline-none"
    />
</template>

<script setup>
import { computed, useAttrs, getCurrentInstance } from 'vue';

/*global defineModel */
const modelValue = defineModel()
const uid = computed(() => {
    const attrs = useAttrs()
    const instance = getCurrentInstance()
    return attrs?.id ? attrs.id : "uid-" + instance.uid
})
</script>