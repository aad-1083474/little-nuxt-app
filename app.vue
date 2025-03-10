 <!-- <template>
  <div>
    {{ userInput }}
    <NuxtPage/>
    <img src="/images/logo.png" alt="curriculum"> -->
    <!-- <NuxtRouteAnnouncer />
   </div>
</template>

<script setup> 
import { ref } from 'vue'
  const userInput = ref('This is an XSS attack')
</script> -->  

<template>
  <div class="container mx-auto bg-inherit h-screen p-5">
    <!-- Contact Settings Section -->
    <div class="bg-blue-50 shadow-md h-1/2 mb-2">
      <div class="bg-blue-950 text-white text-xl font-bold p-4 mb-5 shadow-xl">Contact Settings</div>
      <div class="grid grid-cols-3 gap-4 p-5">
        <!-- Email Contacts Component -->
        <EmailContacts />
        <!-- SMS Contacts Component -->
        <SmsContacts />
        <!-- Phone Contacts Component -->
        <PhoneContacts />
      </div>
    </div>

    <!-- Notification Settings Section -->
    <div class="bg-blue-50 shadow-md h-1/2">
      <div class="bg-blue-950 text-white text-xl font-bold p-4 mb-5 shadow-xl">Notification Settings</div>
      <div class="grid grid-cols-1 p-5">
        <!-- Comments Notification Component -->
        <CommentsNotification />
      </div>
    </div>
  </div>
</template>