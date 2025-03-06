<template>
    <div>
      <h1>User List</h1>
      <UserCard v-for="user in users" :key="user.id" :user="user" />
    </div>
  </template>
  
  <script setup>
    const users = ref([
        { id: 1, name: 'John Doe', email: 'john@example.com', avatar: 'https://placekitten.com/100/100' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', avatar: 'https://placekitten.com/101/101' },
    ]);
  </script>