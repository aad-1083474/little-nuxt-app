<template>
  <div>
    {{ userInput }}
    <about></about>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup> 
import { ref } from 'vue'
import about from '../pages/about.vue'
  const userInput = ref('This is an XSS attack')
</script>