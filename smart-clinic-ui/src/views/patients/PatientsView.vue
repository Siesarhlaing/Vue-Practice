<script setup>
import DashboardLayout from '../../layouts/DashboardLayout.vue'

const patients = [
  {
    id: 1,
    name: 'John Doe',
    age: 25,
    gender: 'Male',
  },
  {
    id: 2,
    name: 'Sarah Smith',
    age: 30,
    gender: 'Female',
  },
]
</script>

<template>
  <DashboardLayout>
    <div class="bg-white rounded-2xl p-6 shadow-sm">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">
          Patients
        </h1>

        <button class="btn btn-primary">
          Add Patient
        </button>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="patient in patients"
            :key="patient.id"
          >
            <td>{{ patient.name }}</td>
            <td>{{ patient.age }}</td>
            <td>{{ patient.gender }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </DashboardLayout>
</template>