<template>
  <v-app-bar
    flat
    color="white"
    height="65"
    elevation="1"
    class="px-6 d-flex align-center justify-space-between"
  >
    <!-- Logo -->
    <div class="d-flex align-center">
      <img
        src="@/assets/img/logo/scoolaa.png"
        alt="logo"
        width="150"
        contain
        class="mr-2"
      />
      <div>
        <div class="text-h6 font-weight-bold">scoolaa</div>
      </div>
    </div>

    <!-- Right -->
    <div class="d-flex align-center" style="gap: 20px;">
      <!-- Language -->
      <v-btn
        variant="flat"
        class="bg-grey-lighten-4 rounded-lg text-none px-4"
      >
        <span class="mr-2">ID</span> IN
        <v-icon size="18" class="ml-1">mdi-chevron-down</v-icon>
      </v-btn>

      <!-- Notification -->
      <div class="relative">
        <v-icon size="28" color="blue-darken-4">mdi-bell</v-icon>
        <span class="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
      </div>

      <!-- Profile -->
      <v-btn
        variant="flat"
        class="bg-grey-lighten-4 rounded-lg text-none px-2 d-flex align-center"
        height="44"
      >
        <v-avatar size="32" class="mr-2">
          <img src="@/assets/img/icon/sidebar/user.png" alt="User" />
        </v-avatar>
        <span class="font-weight-medium text-body-2 text-grey-darken-4 mr-2">Administrator</span>
        <v-icon style="margin: 10px;" size="25">mdi-chevron-down</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>
