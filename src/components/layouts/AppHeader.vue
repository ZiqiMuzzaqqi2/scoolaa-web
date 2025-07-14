<template>
  <v-app-bar flat color="white" height="65" elevation="1">
    <v-container class="d-flex justify-space-between align-center" fluid>
      <!-- Kiri -->
      <div class="d-flex align-center gap-4">
        <v-img src="@/assets/img/logo/scoolaa.png" contain width="40" height="40" class="mr-2" />
        <span class="text-subtitle-1 font-weight-bold">
          PONDOK PESANTREN
        </span>
      </div>

      <!-- Kanan -->
      <div class="d-flex align-center gap-4">
        <v-btn icon variant="text">
          <v-icon>mdi-earth</v-icon>
        </v-btn>
        <v-btn icon variant="text">
          <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
        <v-avatar size="32">
          <img src="#" />
        </v-avatar>
      </div>
    </v-container>
  </v-app-bar>
</template>
