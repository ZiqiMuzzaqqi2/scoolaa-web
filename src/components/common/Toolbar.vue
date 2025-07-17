<template>
  <v-row class="my-4" align="center" justify="space-between">
    <!-- Kiri: Search, Filter, Date -->
    <v-col cols="12" md="9" class="d-flex align-center gap-3">
      <!-- Search -->
      <v-text-field
        v-model="internalSearch"
        prepend-inner-icon="mdi-magnify"
        density="compact"
        variant="flat"
        placeholder="Search teacher name or NIP"
        hide-details
        class="w-50 bg-grey-lighten-2"
        @input="$emit('update:search', internalSearch)"
      />

      <!-- Filter Dropdown -->
      <v-select
        :items="filterItems"
        variant="flat"
        density="compact"
        hide-details
        class="w-25 ml-2 bg-grey-lighten-2"
        v-model="selectedFilter"
        placeholder="Filter"
        rounded="lg"
      >
      <template #prepend-inner>
        <v-icon color="#164875">mdi-filter</v-icon>
      </template>
    </v-select>

      <!-- Date Picker -->
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
      >
        <template #activator="{ props }">
          <v-btn
            variant="flat"
            density="compact"
            v-bind="props"
            class="text-capitalize h-40 ml-2 bg-grey-lighten-2"
          >
            <v-icon start color="#164875">mdi-calendar</v-icon>
            {{ formattedDate }}
          </v-btn>
        </template>
        <v-date-picker
          v-model="internalDate"
          @update:modelValue="$emit('update:modelValue', internalDate)"
        />
      </v-menu>
    </v-col>

    <!-- Kanan: Export Button -->
    <v-col cols="12" md="3" class="text-right">
      <v-btn color="success" variant="outlined" @click="$emit('export')">
        <v-icon start>mdi-download</v-icon>
        Export
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import dayjs from "dayjs";

const props = defineProps({
  search: String,
  modelValue: Date,
});

const emit = defineEmits(["update:search", "update:modelValue", "export"]);

const internalSearch = ref(props.search || "");
const internalDate = ref(props.modelValue || new Date());
const menu = ref(false);
const selectedFilter = ref(null);

const filterItems = ["All", "Present", "Absent"];

const formattedDate = computed(() =>
  dayjs(internalDate.value).format("DD MMMM YYYY")
);
</script>

<style scoped>
.w-25 {
  width: 25% !important;
}
.w-50 {
  width: 50% !important;
}
.h-40 {
  height: 40px !important;
}
</style>
