<template>
    <div>
        <Button.Native 
            v-if="footer" 
            to="/" 
            class="block w-[120px]"
        >
            <Img 
                class="grayscale"
                src="https://nimd.org/wp-content/uploads/2019/03/DEMO-Logo-Final.png"
            />
        </Button.Native>
        <Button.Native 
            v-else 
            to="/" 
            class="block w-[120px]"
        >
            <Img src="https://nimd.org/wp-content/uploads/2019/03/DEMO-Logo-Final.png"/>
        </Button.Native>
    </div>
</template>

<script setup>
    // import { Link } from '@inertiajs/vue3'
    import { Img, Button } from '@/plugins/ui'

    defineProps({
        footer: {
            type: Boolean,
            default: false
        }
    })
</script>