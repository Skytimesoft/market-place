<template>
    <footer class="bg-primary py-12">
        <div class="custom-container">
            <div class="grid grid-cols-3 gap-7 text-[#ddd] text-sm">
                <div>
                    <Logo :footer="true" />
                    <p class="mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas atque similique dolores quasi maiores.
                        Enim, non voluptas recusandae laborum nostrum explicabo aperiam at eligendi, quidem commodi impedit
                        libero ipsa asperiores!</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import Logo from '@/Template/frontend/fragments/Logo.vue'

defineOptions({
    name: 'footerComponent'
})
</script>