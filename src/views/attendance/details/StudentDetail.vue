<template>
  <div>
    <!-- Nanti Breadcrumb -->
    <div class="text-caption text-grey-draken-1 mb-2">
      Attendance / Teacher / {{ studentId }}
    </div>

    <h2 class="text-h5 font-weight-bold mb-4">Student Attendance Detail</h2>
    <v-card class="pa-4" elevation="1">
      <div class="d-flex align-center gap-4 mb-4">
        <v-avatar size="64"
          ><img src="@/assets/img/logo/user.png" alt="User"
        /></v-avatar>
        <div>
          <div class="text-subtitle-1 font-weight-bold">Asep Alexander</div>
          <div class="text-caption">NISN: 1234567890</div>
        </div>
      </div>

      <div>
        <p>
          <strong>Status Today:</strong>
          <v-chip color="success" variant="flat">Present</v-chip>
        </p>
        <p><strong>Entry Time:</strong> 07:00:00</p>
        <p><strong>Previous 7 Days:</strong></p>
        <div class="d-flex gap-2">
          <v-icon color="green">mdi-check-circle</v-icon>
          <v-icon color="red">mdi-close-circle</v-icon>
          <v-icon color="green">mdi-check-circle</v-icon>
          <v-icon color="green">mdi-check-circle</v-icon>
          <v-icon color="green">mdi-check-circle</v-icon>
          <v-icon color="green">mdi-check-circle</v-icon>
          <v-icon color="red">mdi-close-circle</v-icon>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const studentId = route.params.id;
</script>