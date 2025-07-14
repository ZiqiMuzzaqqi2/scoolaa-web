<template>
  <v-sheet elevation="1" width="100%" height="100%">
    <v-list nav density="comfortable">
      <v-list-item
        :to="{ name: 'Dashboard' }"
        :active="$route.name === 'Dashboard'"
        title="Dashboard"
        prepend-icon="mdi-view-dashboard"
        color="primary"
      />

      <v-list-group
        value="Attendance"
        prepend-icon="mdi-calendar-check"
        :base-color="isAttandanceActive ? 'primary' : undefined"
        :active="isAttandanceActive"
      >
        <template #activator="{ props }">
          <v-list-item v-bind="props" title="Attendance" />
        </template>

        <v-list-item
          title="Teacher Attendance"
          :to="{ name: 'TeacherAttendance' }"
          :active="$route.name === 'TeacherAttendance'"
        />
        <v-list-item
          title="Student Attendance"
          :to="{ name: 'StudentAttendance' }"
          :active="$route.name === 'StudentAttendance'"
        />
      </v-list-group>

      <v-list-item
        title="Academic"
        prepend-icon="mdi-book"
        color="primary"
      />

      <v-list-item
        title="User List"
        prepend-icon="mdi-account-group"
        color="primary"
      />

      <v-list-item
        title="Exams"
        prepend-icon="mdi-ballot-outline"
        color="primary"
      />

      <v-list-item
        title="Reports"
        prepend-icon="mdi-file-chart-outline"
        color="primary"
      />

      <v-list-item
        title="Announcements"
        prepend-icon="mdi-email-newsletter"
        color="primary"
      />

      <v-list-item
        title="Accounting"
        prepend-icon="mdi-calculator"
        color="primary"
      />

      <v-list-item
        title="Roles"
        prepend-icon="mdi-safety-goggles"
        color="primary"
      />

      <v-list-item
        title="Setting"
        prepend-icon="mdi-cog"
        color="primary"
      />

      <!-- Tambahkan menu lainnya -->
    </v-list>
  </v-sheet>
</template>


<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const isAttandanceActive = ['TeacherAttendance', 'StudentAttendance'].includes(route.name);
</script>