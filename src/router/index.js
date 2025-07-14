import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import TeacherAttendance from '@/views/attendance/TeacherAtt.vue'
import StudentAttendance from '@/views/attendance/StudentAtt.vue'
import TeacherDetail from '@/views/attendance/details/TeacherDetail.vue'
import StudentDetail from '@/views/attendance/details/StudentDetail.vue'

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/attendance/teacher', name: 'TeacherAttendance', component: TeacherAttendance },
  { path: '/attendance/student', name: 'StudentAttendance', component: StudentAttendance },
  { path: '/attendance/teacher/:id', name: 'TeacherDetail', component: TeacherDetail },
  { path: '/attendance/student/:id', name: 'StudentDetail', component: StudentDetail },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
