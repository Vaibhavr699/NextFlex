<template>
  <div class="overflow-x-auto">
    <div class="inline-block min-w-full align-middle">
      <div class="rounded-lg border border-gray-200 shadow-sm">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50 sticky top-0 z-10 shadow-sm">
            <tr>
              <th
                v-for="column in columns"
                :key="column.key"
                class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
              >
                {{ column.label }}
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 bg-white">
            <tr v-for="row in data" :key="row.id" class="hover:bg-gray-50">
              <td
                v-for="column in columns"
                :key="column.key"
                class="px-4 py-2 text-sm text-gray-800"
              >
                <span>{{ row[column.key] }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  columns: { type: Array, required: true },
  data: { type: Array, required: true },
  visibleKeys: { type: Array, required: true },
});

</script>
