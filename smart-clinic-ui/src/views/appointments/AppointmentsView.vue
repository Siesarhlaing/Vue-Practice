<script setup>
import DashboardLayout from '../../layouts/DashboardLayout.vue'

const appointments = [
  {
    id: 1,
    patient: 'John Doe',
    doctor: 'Dr. Smith',
    date: '2026-05-24',
    status: 'Completed',
  },
  {
    id: 2,
    patient: 'Sarah',
    doctor: 'Dr. Alex',
    date: '2026-05-25',
    status: 'Pending',
  },
]
</script>

<template>
  <DashboardLayout>
    <div class="bg-white rounded-2xl p-6 shadow-sm">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">
          Appointments
        </h1>

        <button class="btn btn-primary">
          New Appointment
        </button>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="appointment in appointments"
            :key="appointment.id"
          >
            <td>{{ appointment.patient }}</td>
            <td>{{ appointment.doctor }}</td>
            <td>{{ appointment.date }}</td>
            <td>
              <span class="badge badge-info">
                {{ appointment.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </DashboardLayout>
</template>