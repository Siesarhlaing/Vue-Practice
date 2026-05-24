<script setup>
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  Stethoscope,
  CreditCard,
} from 'lucide-vue-next'
</script>

<template>
  <aside class="w-72 bg-white border-r border-gray-200 p-5 hidden lg:block">
    <h1 class="text-2xl font-bold text-blue-600 mb-10">
      Smart Clinic
    </h1>

    <ul class="space-y-3">
      <li>
        <RouterLink
          to="/"
          class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50"
        >
          <LayoutDashboard />
          Dashboard
        </RouterLink>
      </li>

      <li>
        <RouterLink
          to="/patients"
          class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50"
        >
          <Users />
          Patients
        </RouterLink>
      </li>

      <li>
        <RouterLink
          to="/doctors"
          class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50"
        >
          <Stethoscope />
          Doctors
        </RouterLink>
      </li>

      <li>
        <RouterLink
          to="/appointments"
          class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50"
        >
          <CalendarDays />
          Appointments
        </RouterLink>
      </li>

      <li>
        <RouterLink
          to="/billing"
          class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50"
        >
          <CreditCard />
          Billing
        </RouterLink>
      </li>
    </ul>
  </aside>
</template>