<template>
    <div> 
        <h4 class="font-semibold mb-4">Shop by category</h4>
        <div class="space-y-1">
            <div 
                v-for="n in 5"
                class="flex items-center gap-x-2 text-sm"
            >
                <input 
                    id="remember" 
                    aria-describedby="remember" 
                    name="remember" 
                    type="checkbox"
                    class="w-4 h-4 border-borderDark rounded focus:ring-0" 
                    required
                >
                <label for="remember">
                    BMW
                </label>
            </div>
        </div>
    </div>
</template>

<script setup>
import {Input } from "@/plugins/form"
</script>