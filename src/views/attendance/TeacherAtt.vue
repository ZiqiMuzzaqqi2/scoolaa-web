<template>
  <div>
    <!-- Nanti Breadcrumb -->
    <Breadcrumb path="Attendance / Teacher Attendance" />
    <div>
      <h2 class="text-h5 font-weight-bold mb-1">Attendance</h2>
      <span class="text-subtitle-2">TEACHER ATTENDANCE</span>
    </div>

    <div class="d-flex justify-space-between align-center mb-4">
      <div class="d-flex align-center gap-2">
        <v-text-field
          density="compact"
          variant="outlined"
          placeholder="Search techer name or NIP"
          hide-details
          class="w-64"
        />
        <v-btn icon variant="outlined"><v-icon>mdi-filter</v-icon></v-btn>
        <v-menu>
          <template #activator="{ props }">
            <v-btn variant="outlined" v-bind="props">
              <v-icon start>mdi-calendar</v-icon>
              13 July 2025
            </v-btn>
          </template>
          <v-date-picker v-model="selectedDate" />
        </v-menu>
        <v-btn color="success" variant="flat" prepend-icon="mdi-export">
            Export
        </v-btn>
      </div>
    </div>

    <AttendanceTable />

    <div class="d-flex justify-space-between align-center mt-4">
      <span class="text-caption">Showing 1 to 5 of 50 entries</span>
      <v-pagination v-model="page" :length="10" size="small" />
    </div>
  </div>
</template>


<script setup>
import AttendanceTable from '@/components/attendance/AttendanceTable.vue';
import Breadcrumb from '@/components/common/Breadcrumb.vue';

const items = [
  {

  }
]
</script>