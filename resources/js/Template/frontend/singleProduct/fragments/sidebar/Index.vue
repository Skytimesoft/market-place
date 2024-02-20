<template>
    <aside class="flex-shrink-0 lg:w-[300px]">
        <div class="bg-white shadow-md rounded divide-y divide-borderLight">
            <SellerInfo />
            <Websites />
            <WorkersList />
            <ContactButtons />
            <OfferForm />
        </div>
    </aside>
</template>

<script setup>
import SellerInfo from "./sellerInfo/Index.vue"
import Websites from "./websites/Index.vue"
import WorkersList from "./workersList/Index.vue"
import ContactButtons from "./contactButtons/Index.vue"
import OfferForm from "./offerForm/Index.vue"
</script>