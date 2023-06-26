<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col">
    <header class="flex flex-row w-screen fixed">
      <div class="flex flex-row  w-screen items-center bg-gray-900 py-2 px-4 fixed">
        <img alt="Vue logo" class="logo mr-12" src="@/assets/logo.svg" width="30" height="30" />
        <div class="wrapper text-white">
          <nav class="flex flex-row items-center gap-3">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
          </nav>
        </div>
      </div>
    </header>
    <main class="flex flex-col flex-grow bg-slate-800 pb-4 pt-[46px] h-screen ">
      <RouterView />
    </main>
  </div>
</template>
