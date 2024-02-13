<template>
    <div>
        <div 
            class="flex flex-wrap gap-2 sm:gap-3 mb-7"
            :class="tabsButtonClass" 
        >
            <template
                v-for="(tab, index) in tabs"
                :key="`tab-${index}`"
            >
                <slot 
                    name="tabButton"
                    :label="tab?.label"
                    :isActive="currentTab?.id === tab?.id"
                    :changeTab="() => setActiveTab(index)"
                >
                    <button 
                        class="px-3 sm:px-5 py-2 select-none border border-borderDark rounded-full font-medium cursor-pointer transition-all duration-300"
                        :class="{ 'bg-primary text-white border-primary': currentTab?.id === tab?.id }" 
                        @click="setActiveTab(index)"
                    >
                        {{ tab?.label }}
                    </button>
                </slot>
            </template>
        </div>

        <div>
            <component
                v-if="currentTab?.component"
                :is="currentTab.component"
                :data="currentTab.data"
            />
        </div>
    </div>
</template>


<script setup>
    import { onMounted } from 'vue'
    import { useTab } from './useTab.js'
    
    const props = defineProps({
        tabs: {
            type: Array,
            required: true
        },
        tabsButtonClass: {
            type: String,
        }
    })

    const {
        currentTab,
        tabsDataWithLabel,
        setActiveTab
    } = useTab()


    onMounted(() => {
        tabsDataWithLabel.value = props.tabs
        let defaultActiveTab = props.tabs.find(tab => tab.active)
        currentTab.value = defaultActiveTab ? defaultActiveTab : props.tabs[0]
    })
</script>