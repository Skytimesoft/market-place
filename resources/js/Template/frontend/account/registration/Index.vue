<template>
    <div class="border-t pt-4">
        <Button.Primary
            class="w-full bg-[#4285F4]"
        >
            <img 
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" 
                class="w-7 h-7 bg-white rounded-full" 
                alt="google logo"
            />
            Sign up with Google
        </Button.Primary>

        <p class="my-6 text-center text-sm">Or log in with your email address</p>

        <form @submit.prevent="submit" class="space-y-4">
            <div>
                <label class="mb-1 text-black/60 font-semibold block">
                    Name
                </label>
                <Input.Native />
            </div>

            <div>
                <label class="mb-1 text-black/60 font-semibold block">
                    Email
                </label>
                <Input.Native />
            </div>

            <div>
                <label class="mb-1 text-black/60 font-semibold block">
                    Password
                </label>
                <div class="relative">
                    <Input.Native 
                        :type="isPasswordShow ? 'text' : 'password'"
                    />
                    <Button.Native 
                        :icon="{
                            name: isPasswordShow ? 'PhEyeSlash' : 'PhEye',
                            size: 16
                        }"
                        @click="passwordShowHandler"
                        class="absolute right-2 top-1/2 -translate-y-1/2 opacity-90 z-20"
                    ></Button.Native>
                </div>
            </div>

            <div>
                <label class="mb-1 text-black/60 font-semibold block">
                    Confirm Password
                </label>
                <div class="relative">
                    <Input.Native 
                        :type="isPasswordShow ? 'text' : 'password'"
                    />
                    <Button.Native 
                        :icon="{
                            name: isPasswordShow ? 'PhEyeSlash' : 'PhEye',
                            size: 16
                        }"
                        @click="passwordShowHandler"
                        class="absolute right-2 top-1/2 -translate-y-1/2 opacity-90 z-20"
                    ></Button.Native>
                </div>
            </div>

            <div>
                <Button.Primary 
                    class="w-full"
                >
                    Login
                </Button.Primary>
            </div>
            <div>
                Already registered?
                <Link href="/registration" class="font-semibold text-secondary underline">
                Sign In here
                </Link>
            </div>
        </form>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'
import { Input } from "@/plugins/form"
import { Button } from "@/plugins/ui"

import { ref } from "vue";
const isPasswordShow = ref(false);

const passwordShowHandler = () => {
    isPasswordShow.value = !isPasswordShow.value;
}
</script>