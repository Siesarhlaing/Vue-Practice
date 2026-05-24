<script setup>
import DashboardLayout from '../../layouts/DashboardLayout.vue'
</script>

<template>
  <DashboardLayout>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <div class="bg-white rounded-2xl p-6 shadow-sm">
        <h2 class="text-gray-500">Total Revenue</h2>
        <p class="text-3xl font-bold mt-3">$25,000</p>
      </div>

      <div class="bg-white rounded-2xl p-6 shadow-sm">
        <h2 class="text-gray-500">Pending Payments</h2>
        <p class="text-3xl font-bold mt-3">$3,500</p>
      </div>
    </div>
  </DashboardLayout>
</template>