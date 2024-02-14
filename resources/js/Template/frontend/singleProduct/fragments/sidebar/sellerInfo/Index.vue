<template>
    <div>
        <Img
            src="https://images.marktplaats.com/api/v1/dm-profile-mp-p/images/57/57c135fd-e5eb-4c89-acfc-efba3ac3ede2?rule=ecg_mp_eps$_83"
            alt="Image"
        />
        <div class="p-4"> 
            <div class="flex justify-between items-center gap-7">
                <div>
                    <h4>
                        <Link 
                            href=""
                            class="flex items-center gap-1.5 font-semibold text-primary hover:underline"
                        >
                            Auto Garant Nunspeet
                        </Link>
                    </h4>
                    <p class="mt-2 text-sm text-content">15 years active on Marktplaats</p>
                </div>
                <Profile />
            </div>

            <p class="my-2 text-sm text-content">
                <Link 
                    href=""
                    class="text-primary hover:underline"
                >
                    See more listings
                </Link>
            </p>

            <div class="bg-body text-xs p-2 rounded">
                <p>
                    This seller has not yet indicated that he is a private or business seller.
                    <Link 
                        href=""
                        class="text-primary hover:underline font-medium"
                    >
                        Read more
                    </Link>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'
import { Img, Button } from '@/plugins/ui'
import Profile from "./Profile.vue"
</script>