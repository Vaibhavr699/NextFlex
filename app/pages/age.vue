<template>
  <div class="p-4 space-y-4">
    <h1 class="text-xl font-semibold">Ages</h1>
    <ReusableTable
      :columns="columns"
      :data="tableData"
      :visible-keys="visibleKeys"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import ReusableTable from "~/components/ReusableTable.vue";
import { useUserStore } from "../stores/userStore";

const userStore = useUserStore();

// await userStore.fetchUsers();
onMounted(async () => {
  await userStore.fetchUsers()
})

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "age", label: "Age" },
  { key: "phone", label: "Phone" },
  { key: "email", label: "Email" },
  { key: "city", label: "City" },
];

const tableData = computed(() => userStore.users);
</script>
