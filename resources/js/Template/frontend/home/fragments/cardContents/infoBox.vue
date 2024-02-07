<template>
    <div class="mt-7 grid grid-cols-3 gap-6">
        <article 
            v-for="item in infoBoxes" 
            :key="item?.title" 
            class="p-4 bg-white shadow-md group rounded overflow-hidden"
        >
            <div class="m-auto inline-block">
                <Icon 
                    :name="item?.iconName" 
                    :size="30"
                    class="text-black opacity-30 group-hover:opacity-100 transition-opacity"
                />
            </div>
            <h4 class="my-2 text-xl font-bold">
                {{ printString(item?.title) }}
            </h4>
            <p class="text-sm">{{ printString(item?.content) }}</p>
        </article>
    </div>
</template>

<script setup>
import { Icon } from "@/plugins/ui";
import { printString } from "@/utilities/helper";

const infoBoxes = [
    {
        title: "The dealer's secret reveals",
        content: "Become a top car salesman too! The secrets of a successful car advertisement at a glance. Read the tips of real car sellers and create the best advertisement for your car.",
        iconName: 'PhPackage'
    },
    {
        title: "Buying a car",
        content: "Make sure you prepare well. Use the checklist before buying your used car. Found a used car? Then bring the purchase agreement and the receipt for payment with you to the purchase.",
        iconName: 'PhBasket'
    },
    {
        title: "Selling a used car",
        content: "Become a top car salesman too! The secrets of a successful car advertisement at a glance. Read the tips of real car sellers and create the best advertisement for your car.",
        iconName: 'PhCar'
    }
];
</script>
