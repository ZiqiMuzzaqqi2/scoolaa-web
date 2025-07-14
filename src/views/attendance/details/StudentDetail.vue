<template>
  <div>
    <!-- Nanti Breadcrumb -->
    <Breadcrumb path="Attendance / Student / {{ studentId }}" />

    <h2 class="text-h5 font-weight-bold mb-4">Student Attendance Detail</h2>
    <v-card class="pa-4" elevation="1">
      <UserCard name="Asep Alexander" nip="1234567890" label="NISN" />

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
import Breadcrumb from "@/components/common/Breadcrumb.vue";
import UserCard from "@/components/attendance/UserCard.vue";

const route = useRoute();
</script>