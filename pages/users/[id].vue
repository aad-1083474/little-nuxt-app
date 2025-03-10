<template>
  <div>
    <title>User profile: {{ $route.params.id }}</title>
    <h1>User Profile</h1>
    <p>User ID: {{ $route.params.id }}</p>
  </div>
</template>

<script setup>
  const route = useRoute();
  console.log(route.params.id);
</script>