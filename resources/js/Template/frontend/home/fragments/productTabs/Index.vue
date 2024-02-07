<template>
    <section>
        <div class="custom-container">
            <Tabs 
                :tabs="productTabs" 
            >    
            </Tabs>
        </div>
    </section>
</template>

<script setup>
import { Tabs } from '@/plugins/ui'
import TabsOne from './TabsOne.vue'
import TabsTwo from './TabsTwo.vue'

const productTabs = [
    {
        id: 1,
        label: 'For you',
        component: TabsOne,
        active: true
    },
    { 
        id: 2,
        label: 'In your neighborhood',
        component: TabsTwo,
        active: false
    }
]
</script>