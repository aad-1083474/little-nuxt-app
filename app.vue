<template>
  <div>
    {{ userInput }}
    <NuxtPage/>
    <!-- <img src="/images/logo.png" alt="curriculum"> -->
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup> 
import { ref } from 'vue'
  const userInput = ref('This is an XSS attack')
</script>