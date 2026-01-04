<template>
  <div class="min-h-screen flex bg-gray-100">
    <!-- Sidebar -->
    <Bar />

    <!-- Main content -->
    <main class="flex-1 p-6">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Bar from "./components/sidebar/bar.vue";
</script>
