<template>
  <section class="py-10 items-center justify-center flex">
    <div class="max-w-3xl p-4 rounded-md ">
      <h1 class="text-3xl sm:text-4xl font-semibold tracking-tight text-center">
        Welcome to NuxtFlexTable Project
      </h1>
      

      <div class="mt-6 flex flex-col sm:flex-row gap-3 items-center justify-center">
        <NuxtLink
          to="/users"
          class="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-white text-sm font-medium hover:bg-blue-700 shadow-sm"
        >
          Users
        </NuxtLink>
        <NuxtLink
          to="/age"
          class="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-2.5 text-white text-sm font-medium hover:bg-black shadow-sm"
        >
          Age
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
