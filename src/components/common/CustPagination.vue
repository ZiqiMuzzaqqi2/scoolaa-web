<template>
  <div class="d-flex justify-space-between align-center mt-4">
    <!-- Kiri -->
    <span class="text-caption">
      Showing {{ startItem }} to {{ endItem }} of {{ totalItems }} entries
    </span>

    <!-- Kanan -->
    <div class="d-flex align-center gap-2">
      <span class="text-caption mr-2">The page you're on</span>

      <!-- Dropdown halaman -->
      <v-select
        :items="pageOptions"
        :v-model="modelValue"
        hide-details
        density="compact"
        variant="outlined"
        style="width: 60px"
        class="mr-2"
      />

      <!-- Tombol previous -->
      <v-btn
        icon
        variant="outlined"
        :disabled="modelValue === 1"
        @click="$emit('update:modelValue', modelValue - 1)"
        rounded="lg"
        class="mr-2"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <!-- Tombol next -->
      <v-btn
        icon
        variant="outlined"
        :disabled="modelValue === pageCount"
        @click="$emit('update:modelValue', modelValue + 1)"
        rounded="lg"
        class="mr-2"
      >
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: Number,
  perPage: Number,
  totalItems: Number,
});

const emit = defineEmits(["update:modelValue"]);

const pageCount = computed(() => Math.ceil(props.totalItems / props.perPage));
const startItem = computed(() => (props.modelValue - 1) * props.perPage + 1);
const endItem = computed(() =>
  Math.min(props.modelValue * props.perPage, props.totalItems)
);
const pageOptions = computed(() =>
  Array.from({ length: pageCount.value }, (_, i) => i + 1)
);
</script>
