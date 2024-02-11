<template>
    <div class="space-y-1.5">
        <div 
            v-for="(item, index) in items" 
            :key="index"
            class="w-full"
        >

            <button 
                @click="toggleAccordion(index)"
                class="px-4 py-2.5 bg-primary/5 w-full flex justify-between items-center gap-4"
            >
                <h5 class="flex items-center gap-x-2 text-left">
                    <Icon
                        :name="item?.iconName"
                        size="20"
                        color="#606060"
                    />
                    <span 
                        class="font-semibold"
                        :class="openIndex === index ? 'text-primary' : ''"
                    >
                        {{ item?.title }}
                    </span>
                </h5>
                <Icon
                    :name="openIndex === index ? 'PhCaretUp' : 'PhCaretDown'"
                    size="16"
                    class="flex-shrink-0"
                />
            </button>

            <div 
                v-if="openIndex === index" 
                :class="{ 'block': openIndex === index }"
                class="p-4 text-sm"
            >
                <ul class="space-y-4">
                    <li 
                        v-for="(n, index) in 10"
                        :key="index"
                        class="grid grid-cols-2 gap-3"
                    >
                        <span class="text-content">Merk & Model</span>
                        <span class="font-semibold">Handgeschakeld 6 versnellingen</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { Icon } from "@/plugins/ui"

const items = ref([
    { 
        iconName: 'car-simple',
        title: 'Basis' 
    },
    { 
        iconName: 'engine',
        title: 'Engine' 
    },
    { 
        iconName: 'leaf',
        title: 'Environment' 
    }
])

const openIndex = ref(null)

const toggleAccordion = (index) => {
    openIndex.value === index ? openIndex.value = null :  openIndex.value = index
}
</script>