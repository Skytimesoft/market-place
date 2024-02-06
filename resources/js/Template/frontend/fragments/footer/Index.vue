<template>
    <footer class="bg-primary py-12">
        <div class="custom-container">
            <div class="grid grid-cols-4 gap-7 text-[#ddd] text-sm">
                <FooterOne />
                <FooterTwo />
                <FooterThree />
                <FooterFour />
            </div>
        </div>
    </footer>
</template>

<script setup>
import FooterOne from "./FooterOne.vue"
import FooterTwo from "./FooterTwo.vue"
import FooterThree from "./FooterThree.vue"
import FooterFour from "./FooterFour.vue"

defineOptions({
    name: 'footerComponent'
})
</script>