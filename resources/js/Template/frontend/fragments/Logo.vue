<template>
    <div>
        <div v-if="footer">
            <Img 
                src="https://nimd.org/wp-content/uploads/2019/03/DEMO-Logo-Final.png"
            />
        </div>
        <div v-else>
            Header logo
        </div>
    </div>
</template>

<script setup>
    import { Img } from '@/plugins/ui'

    defineProps({
        footer: {
            type: Boolean,
            default: false
        }
    })
</script>