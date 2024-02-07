<template>
    <section class="pb-12">
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
        label: 'Used and young used cars',
        component: TabsOne,
        active: true
    },
    { 
        id: 2,
        label: 'All brands',
        component: TabsTwo,
        active: false
    }
]
</script>