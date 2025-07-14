<template>
  <div>
    <!-- Nanti Breadcrumb -->
    <div class="text-caption text-grey-draken-1 mb-2">
      Attendance / Teacher Attendance
    </div>
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

    <v-table>
        <thead>
            <tr>
                <th>Image</th>
                <th>Teacher Name</th>
                <th>Attendance Date</th>
                <th>Attendance Status</th>
                <th>Previous 7 Days</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="i in 5" :key="i">
                <td><v-avatar size="32"><img src="@/assets/img/logo/user.png" alt=""></v-avatar></td>
                <td>John Doe<br /><small>NIP: 1234567890</small></td>
                <td>13/07/2023 12:00:00</td>
                <td><v-chip color="success">Present</v-chip></td>
                <td>
                  <v-icon color="green">mdi-check-circle</v-icon>
                  <v-icon color="red">mdi-close-circle</v-icon>
                  <v-icon color="green">mdi-check-circle</v-icon>
                  <v-icon color="green">mdi-check-circle</v-icon>
                  <v-icon color="green">mdi-check-circle</v-icon>
                  <v-icon color="red">mdi-close-circle</v-icon>
                  <v-icon color="green">mdi-check-circle</v-icon>
                </td>
                <td>
                  <v-btn 
                  size="small" 
                  color="primary" 
                  variant="outlined"
                  :to="{ name: 'TeacherDetail', params: { id: i } }"
                  >View Data
                </v-btn>
                </td>
            </tr>
        </tbody>
    </v-table>

    <div class="d-flex justify-space-between align-center mt-4">
      <span class="text-caption">Showing 1 to 5 of 50 entries</span>
      <v-pagination v-model="page" :length="10" size="small" />
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';

const page = ref(1);
const selectedDate = ref(new Date());
</script>