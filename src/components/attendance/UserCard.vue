<template>
    <div class="d-flex align-center gap-4 mb-4">
        <v-avatar size="64"><img src="@/assets/img/logo/user.png" alt="User"></v-avatar>
        <div>
            <div class="text-subtitle-1 font-weight-bold">{{ name }}</div>
            <div class="text-caption">{{ label }}: {{ nip }}</div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    name: String,
    nip: String,
    label: String
})
</script>