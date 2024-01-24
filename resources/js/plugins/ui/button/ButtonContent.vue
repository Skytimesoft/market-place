<template>
    <MyIcon
        v-if="!isEmpty(iconConfig) && (iconConfig.position == 'left' || iconConfig.position == 'top')"
        :style="{width: `${iconConfig.size}px`, height: `${iconConfig.size}px`}"
        :name="iconConfig.name"
        :size="iconConfig.size"
        :weight="iconConfig.weight"
        :color="iconConfig.color"
        :mirrored="iconConfig.mirrored"
        :spin="iconConfig.spin"
        :source="iconConfig.source"
    />
    <slot></slot>
    <MyIcon
        v-if="!isEmpty(iconConfig) && (iconConfig.position == 'right' || iconConfig.position == 'bottom')"
        :style="{width: `${iconConfig.size}px`, height: `${iconConfig.size}px`}"
        :name="iconConfig.name"
        :size="iconConfig.size"
        :weight="iconConfig.weight"
        :color="iconConfig.color"
        :mirrored="iconConfig.mirrored"
        :spin="iconConfig.spin"
        :source="iconConfig.source"
    />
    <Loader 
        :loading="loading"
        class="text-xl"
    />
</template>

<script setup>
    import { Loader, Icon as MyIcon } from '@/plugins/ui'
    import { computed } from 'vue'
    import { isEmpty, merge  } from 'lodash'

    const defaultConfig = {
        name: null,
        source: null,
        weight: 'regular',
        size: '16',
        color: 'currentColor',
        spin: false,
        mirrored: false,
        position: 'left', //left, top, right, bottom
    }
    const props = defineProps({
        loading: Boolean,
        icon: {
            type: Object,
        }
    })

    const iconConfig = computed(() => merge(defaultConfig, props.icon))
</script>