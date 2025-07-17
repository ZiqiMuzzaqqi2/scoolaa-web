<template>
  <v-app>
    <!-- Header -->
    <AppHeader />

    <!-- Wrapper antara sidebar dan konten -->
    <div class="layout-wrapper">
      <!-- Sidebar -->
      <aside class="sidebar-panel">
        <AppSidebar />
      </aside>

      <!-- Konten utama -->
      <main class="content-panel">
        <router-view />
      </main>
    </div>
  </v-app>
</template>

<script setup>
import AppHeader from "@/components/layouts/AppHeader.vue"
import AppSidebar from "@/components/layouts/AppSidebar.vue"
</script>

<style scoped>
.layout-wrapper {
  display: flex;
  height: calc(100vh - 65px);
  margin-top: 65px;
  overflow: hidden;
}

.sidebar-panel {
  width: 248px;
  background-color: white;
  border-right: 1px solid #e0e0e0;
  padding-top: 16px;
  overflow-y: auto;
}

.content-panel {
  flex: 1;
  background-color: #f5f7fa;
  padding: 24px 32px;
  overflow-y: auto;
}
</style>
