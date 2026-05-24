<script setup>
import DashboardLayout from '../../layouts/DashboardLayout.vue'

const doctors = [
  {
    id: 1,
    name: 'Dr. Smith',
    specialty: 'Cardiology',
  },
  {
    id: 2,
    name: 'Dr. Alex',
    specialty: 'Neurology',
  },
]
</script>

<template>
  <DashboardLayout>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <div
        v-for="doctor in doctors"
        :key="doctor.id"
        class="bg-white rounded-2xl p-6 shadow-sm"
      >
        <div class="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/150"
            class="w-16 h-16 rounded-full"
          />

          <div>
            <h2 class="text-xl font-bold">
              {{ doctor.name }}
            </h2>

            <p class="text-gray-500">
              {{ doctor.specialty }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>