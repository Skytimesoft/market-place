<template>
    <div class="flex items-center justify-center">
      <Button.Primary
        :icon="{
            name: 'PhCaretLeft',
            size: 16
        }"
      >
      </Button.Primary>

      <div>
        <Button.Native
          class="px-4"
        >
          1
        </Button.Native>
        <Button.Native
          class="px-4"
        >
          2
        </Button.Native>
        <Button.Primary
          outline="true"
          class="px-4 font-medium"
        >
          3
        </Button.Primary>
        <Button.Native
          class="px-4"
        >
          4
        </Button.Native>
        <Button.Native
          class="px-4"
        >
          5
        </Button.Native>
      </div>

      <Button.Primary
        :icon="{
            name: 'PhCaretRight',
            size: 16,
            position: 'right'
        }"
      >
      </Button.Primary>
    </div>
  </template>
  
<script setup>
import { Button } from "@/plugins/ui"
</script>