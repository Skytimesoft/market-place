<template>
    <section>
        <div class="custom-container">
            <Tabs 
                :tabs="productTabs" 
            >
                <template #tabButton="{ label, isActive, changeTab }">
                    <button
                        class="px-4 py-2 rounded shadow-lg uppercase font-bold"
                        :class="isActive ? 'bg-red-500 text-white' : 'bg-white text-red-500 '"
                        @click="changeTab"
                    >
                        {{ label }}
                    </button>
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
    },
    { 
        id: 3,
        label: 'In your neighborhood',
        component: TabsTwo,
        active: false
    }
]
</script>