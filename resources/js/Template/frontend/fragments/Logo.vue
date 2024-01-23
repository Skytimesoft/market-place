<template>
    <div>
        <div v-if="footer">
            <Img 
                class="w-[150px] grayscale"
                src="https://nimd.org/wp-content/uploads/2019/03/DEMO-Logo-Final.png"
            />
        </div>
        <div v-else>
            <Img 
                class="w-[150px]"
                src="https://nimd.org/wp-content/uploads/2019/03/DEMO-Logo-Final.png"
            />
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