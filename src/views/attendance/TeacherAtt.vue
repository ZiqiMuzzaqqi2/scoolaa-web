<template>
  <div>
    <!-- Nanti Breadcrumb -->
    <Breadcrumb path="Attendance / Teacher Attendance" />

    <div>
      <h2 class="text-h5 font-weight-bold mb-1">Attendance</h2>
      <span class="text-subtitle-2">TEACHER ATTENDANCE</span>
    </div>

    <Toolbar
      v-model="selectedDate"
      :search="search"
      @update:search="search = $event"
      @export="handleExport"
    />

    <AttendanceTable :items="paginatedItems" type="teacher" label="NIP" />

    <CustPagination
      :totalItems="itemsAll.length"
      v-model="page"
      :perPage="perPage"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import AttendanceTable from "@/components/attendance/AttendanceTable.vue";
import Breadcrumb from "@/components/common/Breadcrumb.vue";
import CustPagination from "@/components/common/CustPagination.vue";
import Toolbar from "@/components/common/Toolbar.vue";

const page = ref(1);
const perPage = 5;

const selectedDate = ref(new Date());
const search = ref("");

const handleExport = () => {
  console.log("Export clicked");
  // Logika export
}

const paginatedItems = computed(() => {
  const start = (page.value - 1) * perPage;
  const end = page.value * perPage;
  return itemsAll.value.slice(start, end);
});

const itemsAll = ref([
  {
    id: "1234567890",
    name: "Junaedi",
    date: "13 July 2023",
    status: "Present",
    week: [true, false, true, true, true, true, false],
  },
  {
    id: "1234567890",
    name: "Junaedi",
    date: "13 July 2023",
    status: "Present",
    week: [true, false, true, true, true, true, false],
  },
  {
    id: "1234567890",
    name: "Junaedi",
    date: "13 July 2023",
    status: "Present",
    week: [true, false, true, true, true, true, false],
  },
  {
    id: "1234567890",
    name: "Junaedi",
    date: "13 July 2023",
    status: "Present",
    week: [true, false, true, true, true, true, false],
  },
  {
    id: "1234567890",
    name: "Junaedi",
    date: "13 July 2023",
    status: "Present",
    week: [true, false, true, true, true, true, false],
  },
  {
    id: "1234567890",
    name: "Junaedi",
    date: "13 July 2023",
    status: "Present",
    week: [true, false, true, true, true, true, false],
  },
  {
    id: "1234567890",
    name: "Junaedi",
    date: "13 July 2023",
    status: "Present",
    week: [true, false, true, true, true, true, false],
  },
  {
    id: "1234567890",
    name: "Junaedi",
    date: "13 July 2023",
    status: "Present",
    week: [true, false, true, true, true, true, false],
  },
  {
    id: "1234567890",
    name: "Junaedi",
    date: "13 July 2023",
    status: "Present",
    week: [true, false, true, true, true, true, false],
  },
  {
    id: "1234567890",
    name: "Junaedi",
    date: "13 July 2023",
    status: "Present",
    week: [true, false, true, true, true, true, false],
  },
  {
    id: "1234567890",
    name: "Junaedi",
    date: "13 July 2023",
    status: "Present",
    week: [true, false, true, true, true, true, false],
  },
  {
    id: "1234567890",
    name: "Junaedi",
    date: "13 July 2023",
    status: "Present",
    week: [true, false, true, true, true, true, false],
  },
  {
    id: "1234567890",
    name: "Junaedi",
    date: "13 July 2023",
    status: "Present",
    week: [true, false, true, true, true, true, false],
  },
  {
    id: "1234567890",
    name: "Junaedi",
    date: "13 July 2023",
    status: "Present",
    week: [true, false, true, true, true, true, false],
  },
  {
    id: "1234567890",
    name: "Junaedi",
    date: "13 July 2023",
    status: "Present",
    week: [true, false, true, true, true, true, false],
  },
]);

</script>
