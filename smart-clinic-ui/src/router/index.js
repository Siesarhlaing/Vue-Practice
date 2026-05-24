import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/dashboard/DashboardView.vue'
import Patients from '../views/patients/PatientsView.vue'
import Doctors from '../views/doctors/DoctorsView.vue'
import Appointments from '../views/appointments/AppointmentsView.vue'
import Billing from '../views/billing/BillingView.vue'
import Login from '../views/auth/LoginView.vue'

const routes = [
  {
    path: '/',
    component: Dashboard,
  },
  {
    path: '/patients',
    component: Patients,
  },
  {
    path: '/doctors',
    component: Doctors,
  },
  {
    path: '/appointments',
    component: Appointments,
  },
  {
    path: '/billing',
    component: Billing,
  },
  {
    path: '/login',
    component: Login,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router