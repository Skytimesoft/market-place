<template>
    <Layout>
        <div class="py-12">
            <div class="custom-container">

                <div class="bg-white shadow-md rounded p-4 pt-7">
                    <div class="max-w-[500px] m-auto">
                        <Tabs 
                            :tabs="accountTabs"
                            tabsButtonClass="justify-center"
                        >
                        </Tabs>
                    </div>
                </div>
                
                <SuccessfulAccount />
            </div>
        </div>
    </Layout>
</template>

<script setup>
import { Tabs } from '@/plugins/ui'
import Layout from '@/Template/frontend/layout/Index.vue'
import Login from './login/Index.vue'
import Registration from './registration/Index.vue'
import SuccessfulAccount from './registration/SuccessfulAccount.vue';

const accountTabs = [
    {
        id: 1,
        label: 'Log In',
        component: Login,
        active: true
    },
    {
        id: 2,
        label: 'Account',
        component: Registration,
        active: false
    }
]
</script>