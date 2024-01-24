<template>
    <div class="flex gap-4 items-center">
        <ul class="flex items-start">
            <li 
                v-for="primaryMenu of primaryMenus" 
                :key="primaryMenu?.label" 
                class="px-2"
            >
                <router-link 
                    :to="primaryMenu?.url" 
                    class="flex items-center gap-1"
                >
                    <Icon 
                        :name="primaryMenu?.icon" 
                        :size="16" 
                    />
                    <span class="text-xs">
                        {{ primaryMenu?.label }}
                    </span>
                </router-link>
            </li>
        </ul>
        <Button.Primary>
            <PhPushPin :size="16" class="-rotate-90 mr-1" />
            <span>Place advertisement</span>
        </Button.Primary>
    </div>
</template>

<script setup>
import { Icon, Button } from "@/plugins/ui";
import { PhPushPin } from '@phosphor-icons/vue'
// import PrimaryButton from '@/Components/PrimaryButton.vue';

console.log(Button);

const primaryMenus = [
    {
        icon: 'PhChatsCircle',
        label: 'Report',
        url: '/',
    },
    {
        icon: 'PhBell',
        label: 'Notifications',
        url: '/'
    },
    {
        icon: 'PhUser',
        label: 'Login',
        url: '/'
    }
];
</script>