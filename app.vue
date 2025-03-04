<template>
  <div>
    {{ userInput }}
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup> 
import { ref } from 'vue'
  const userInput = ref('This is an XSS attack')
</script>