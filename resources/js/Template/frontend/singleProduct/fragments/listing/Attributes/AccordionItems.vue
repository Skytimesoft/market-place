<template>
    <div class="accordion">
      <div v-for="(item, index) in items" :key="index">
        <button @click="toggleAccordion(index)">
            <span :class="isOpen(index) ? 'font-bold' : ''">{{ item.title }}</span>
        </button>
        <div v-if="isOpen(index)" class="" :class="{ isOpen(index) ? 'block' : 'hidden' }">
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const items = ref([
    { title: 'Accordion 1', content: 'Content for Accordion 1' },
    { title: 'Accordion 2', content: 'Content for Accordion 2' },
    { title: 'Accordion 3', content: 'Content for Accordion 3' }
  ])
  
  const openIndex = ref(null)
  
  const toggleAccordion = (index) => {
    if (openIndex.value === index) {
      openIndex.value = null
    } else {
      openIndex.value = index
    }
  }
  
  const isOpen = (index) => {
    return openIndex.value === index
  }
  </script>
  
  <!-- <style scoped>
    .accordion {
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-bottom: 10px;
    }
  
    .accordion button {
      background-color: #f0f0f0;
      padding: 10px;
      border: none;
      width: 100%;
      text-align: left;
      cursor: pointer;
    }
  
    .accordion .content {
      padding: 10px;
      display: none;
    }
  
    .accordion .content.show {
      display: block;
    }
  </style> -->