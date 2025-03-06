<template>
    <div>
        <title>Hoofdpagina</title>
      <h1>User List</h1>
      <UserCard v-for="user in users" :key="user.id" :user="user" />
    </div>
  </template>
  
  <script setup>
    const users = ref([
        { id: 1, name: 'John Doe', email: 'john@example.com'},
        { id: 2, name: 'Jane Smith', email: 'jane@example.com'},
    ]);
  </script>