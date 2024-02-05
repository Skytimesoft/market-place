<template>
    <section>
        <div class="custom-container">
            <Tabs :tabs="productTabs" defaultTab="tab1">
                <template #tab1>
                    <TabsOne />
                </template>
                <template #tab2>
                    <TabsTwo />
                </template>
            </Tabs>

            
        </div>
    </section>
</template>

<script setup>
import { Tabs } from '@/plugins/ui'
import TabsOne from './TabsOne.vue'
import TabsTwo from './TabsTwo.vue'

const productTabs = [
    { id: 'tab1', label: 'For you' },
    { id: 'tab2', label: 'In your neighbourhood' }
];
</script>