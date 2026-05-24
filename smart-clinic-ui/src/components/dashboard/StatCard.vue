<script setup>
defineProps({
  title: String,
  value: String,
})
</script>

<template>
  <div class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
    <p class="text-gray-500">
      {{ title }}
    </p>

    <h2 class="text-3xl font-bold mt-3">
      {{ value }}
    </h2>
  </div>
</template>