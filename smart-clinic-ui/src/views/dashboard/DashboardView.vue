<script setup>
import DashboardLayout from '../../layouts/DashboardLayout.vue'
import StatCard from '../../components/dashboard/StatCard.vue'

const stats = [
  {
    title: 'Total Patients',
    value: '1,250',
  },
  {
    title: 'Appointments',
    value: '320',
  },
  {
    title: 'Doctors',
    value: '18',
  },
  {
    title: 'Revenue',
    value: '$12,500',
  },
]
</script>
<template>
    <DashboardLayout>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard
          v-for="item in stats"
          :key="item.title"
          :title="item.title"
          :value="item.value"
        />
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">
      <div class="xl:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
        <h2 class="text-xl font-bold mb-5">
          Recent Appointments
        </h2>

        <table class="table">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>John Doe</td>
              <td>Dr. Smith</td>
              <td>
                <span class="badge badge-success">
                  Completed
                </span>
              </td>
            </tr>

            <tr>
              <td>Sarah</td>
              <td>Dr. Alex</td>
              <td>
                <span class="badge badge-warning">
                  Pending
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="bg-white rounded-2xl p-6 shadow-sm">
        <h2 class="text-xl font-bold mb-5">
          Doctor Schedule
        </h2>

        <div class="space-y-4">
          <div class="p-4 rounded-xl bg-blue-50">
            Dr. Smith - 9:00 AM
          </div>

          <div class="p-4 rounded-xl bg-green-50">
            Dr. Alex - 11:00 AM
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>