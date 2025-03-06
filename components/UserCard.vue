<template>
  <div class="user-card">
    <img :src="user.avatar" :alt="user.name" class="user-avatar">
    <h2>{{ user.name }}</h2>
    <p>{{ user.email }}</p>
  </div>
</template>

<script setup>
  defineProps(['user']);
</script>

<style scoped>
  .user-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 16px 0;
    text-align: center;
  }
  .user-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
</style>
