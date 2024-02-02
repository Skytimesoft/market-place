<template>
    <Input.Native
        :id="uid"
        type="radio"
        :modelValue="modelValue"
        @update:modelValue="setModelValue"
        :value="value"
        class="hidden"
    />
    <label 
        :for="uid" 
        :class="[modelValue == value ? 'text-primary' : '', radioIconNone ? '' : 'flex gap-1 items-center', radioPadding]"
    >
        <Icon v-if="!radioIconNone"
            :name="modelValue == value ? 'PhCheckCircle' : 'PhCircle'" size="20" 
        />
        {{ label }}
    </label>
</template>

<script setup>
    import { Input } from '@/plugins/form'
    import { inject } from 'vue'
    import { useForm } from '../useForm'
    import { Icon } from '@/plugins/ui'

    const { modelValue, setModelValue } = inject('modelValue')
    const { uid } = useForm()

    defineProps({
        label: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true
        },
        radioIconNone: {
            type: Boolean,
            default: false
        },
        radioPadding: {
            type: String
        }
    })
</script>