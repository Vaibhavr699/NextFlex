<template>
  <div class="p-4 space-y-4">
    <h1 class="text-xl font-semibold">Users</h1>
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

await userStore.fetchUsers();

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "age", label: "Age" },
  { key: "city", label: "City" },
  { key: "country", label: "Country" },
  { key: "occupation", label: "Occupation" },
  { key: "salary", label: "Salary" },
  { key: "department", label: "Department" },
  { key: "startDate", label: "Start Date" },
  { key: "status", label: "Status" },
  { key: "actions", label: "Actions" },
];

const tableData = computed(() => userStore.users);
</script>
