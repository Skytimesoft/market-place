<template>
    <footer>
        <Logo :footer="true"/>
    </footer>
</template>

<script setup>
    import Logo from '@/Template/frontend/fragments/Logo.vue'

    defineOptions({
        name: 'footerComponent'
    })
</script>