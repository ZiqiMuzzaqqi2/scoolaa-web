<template>
  <v-table density="comfortable" fixed-header>
    <thead>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Date</th>
        <th>Status</th>
        <th>Previous 7 Days</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>
          <v-avatar size="32"
            ><img src="@/assets/img/icon/sidebar/user.png" alt="User"
          /></v-avatar>
        </td>
        <td>
          {{ item.name }}<br />
          <small>{{ label }}: {{ item.id }}</small>
        </td>
        <td>{{ item.date }}</td>
        <td>
          <v-chip
            :color="item.status === 'Present' ? 'success' : 'error'"
            variant="flat"
          >
            {{ item.status }}
          </v-chip>
        </td>
        <td>
          <v-icon
            v-for="(val, i) in item.weeks"
            :key="i"
            :color="val ? 'green' : 'red'"
          >
            {{ val ? "mdi-check-circle" : "mdi-close-circle" }}
          </v-icon>
        </td>
        <td>
          <v-btn
            size="small"
            color="primary"
            variant="outlined"
            :to="`/attendance/${type}/${item.id}`"
          >
            View Detail
          </v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
defineProps({
    items: Array,
    type: String,
    label: String
})
</script>