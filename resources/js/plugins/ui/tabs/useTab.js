import { ref } from 'vue'

export const useTab = () => {
    const currentTab = ref(null)
    const tabsDataWithLabel = ref([])
    const setActiveTab = (index) => 
    {
        currentTab.value = tabsDataWithLabel.value[index]
    }

    return {
        currentTab,
        tabsDataWithLabel,
        setActiveTab
    }
}