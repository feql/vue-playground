<script setup>
import { RouterLink, RouterView } from 'vue-router'
import IconHeart from './components/icons/IconHeart.vue';
import IconGithub from './components/icons/IconGithub.vue';
</script>

<template>
  <div class="flex flex-col">
    <header class="flex flex-row w-screen fixed">
      <div class="flex flex-row  w-screen items-center bg-gray-900 py-2 px-4 fixed">
        <div class="flex flex-row mr-12 text-white font-bold">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" />
          <RouterLink to="/">Control Panel <small>v0.1.0</small></RouterLink>
        </div>
        <div class="wrapper text-white flex-grow flex flex-row justify-end ">
          <nav class="flex flex-row items-center gap-3">
            <a href="https://github.com/prettier/prettier" target="_blank" class="mr-1">
              <img alt="Vue logo" class="logo " src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)" />
            </a>

            
            <a class="mx-2 flex flex-row items-center text-xs text-gray-400 hover:text-gray-300" target="_blank" href="https://github.com/feql/feq"  >
              <IconGithub class="text-gray-300" /> This Vue Js Control Panel
            </a>
            <a class="mx-2 flex flex-row items-center text-xs text-gray-400 hover:text-gray-300" target="_blank" href="https://github.com/feql/vue-playground"  >
              <IconGithub class="text-gray-300" /> feql Source Code
            </a>
            <a class="mx-2 flex flex-row items-center text-xs text-gray-400 hover:text-gray-300" target="_blank" href="https://github.com/feql/bee"  >
              <IconGithub class="text-gray-300" /> Backend Engine  (bee 🐝 )
            </a>
            <a class="mx-2 flex flex-row items-center text-xs text-gray-400 hover:text-gray-300" target="_blank" href="https://github.com/feql/bee"  >
              Docs
            </a>
            <a class="mx-2 flex flex-row items-center text-xs text-gray-400 hover:text-gray-300" target="_blank" href="https://github.com/feql/bee"  >
              Road Map
            </a>
          </nav>
        </div>
      </div>
    </header>
    <main class="flex flex-col flex-grow bg-slate-800 pb-0 pt-[46px] h-screen ">
      <RouterView />
      <div class="text-xs text-slate-500 px-5 flex flex-row justify-end">
        <a href="https://www.iamnyola.com" target="_blank" class="mx-1 flex hover:text-white" >
          with <IconHeart  class="text-red-400"/> by 
          <span class="font-bold mx-1 hover:text-white">Nyola Mike</span>
        </a>
      </div>
    </main>
  </div>
</template>
