<template>
    <div v-if="item">
        <ul 
            class="flex flex-wrap gap-2 sm:gap-3 mb-7"
            :class="[headerStyle, headerPosition, uppercase ? 'uppercase' : 'capitalize']">
            <li 
                class="px-3 sm:px-5 py-2 border border-borderLight rounded-full font-medium cursor-pointer transition-all duration-300"
                :class="{ 'bg-heading text-white border-heading': currentTab === item[id] }" @click="selectTab(item[id])">
                {{ item[label] }}
            </li>
        </ul>
        <div>
            <slot :name="currentTab"></slot>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    item: {
        type: Object
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