<template>
    <section>
        <div class="custom-container">
            <Tabs v-for="item in productTabs" :key="index" :item="item">
                <template #tab1>
                    gregre
                </template>
                <template #tab2>
                    <p>Best seller products will be here!</p>
                </template>
            </Tabs>
        </div>
    </section>
</template>

<script setup>
import { Tabs } from '@/plugins/ui'

const productTabs = [
    { id: 'tab1', label: 'New products' },
    { id: 'tab2', label: 'Best seller' },
    { id: 'tab3', label: 'Top rated' }
];
</script>