<script setup>
import { ref } from 'vue';

const props = defineProps({
    tabs: {
        type: Array,
        required: true
    },
    defaultTab: {
        type: String,
        default: null
    },
    headerStyle: {
        type: [Array, Object, String],
        default: ''
    },
    headerPosition: {
        type: [Array, Object, String],
        default: ''
    },
    uppercase: {
        type: Boolean,
    }
});

const currentTab = ref(props.defaultTab || tabs[0].id);

const selectTab = (id) => {
    currentTab.value = id;
};
</script>

<template>
    <div>
        <ul class="flex flex-wrap gap-2 sm:gap-3 mb-7" :class="[headerStyle, headerPosition, uppercase ? 'uppercase' : 'capitalize']">
            <li v-for="tab in tabs" :key="tab?.id" class="px-3 sm:px-5 py-2 border border-borderDark rounded-full font-medium cursor-pointer transition-all duration-300"
                :class="{ 'bg-primary text-white border-primary': currentTab === tab?.id }" @click="selectTab(tab?.id)">
                {{ tab?.label }}
            </li>
        </ul>
        <div class="tabs-content">
            <slot :name="currentTab"></slot>
        </div>
    </div>
</template>