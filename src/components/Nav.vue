<script setup lang="ts">
import { ref } from 'vue'
import NavLinks from './NavLinks.vue';
const visible = ref(false);
</script>

<template>
  <Drawer v-model:visible="visible" header="Menu">
    <div class="flex flex-col gap-6 pt-8">
      <NavLinks/>
    </div>
  </Drawer>
  <div class="flex justify-around w-full max-w-screen-xl mx-auto items-center py-4 mb-4 border-gray-800 border-b text-xl">
    <div class="block sm:hidden">
      <a @click.stop="visible = true">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/></svg>
      </a>
    </div>
    <div class="hidden sm:flex justify-around gap-8">
      <NavLinks/>
    </div>
    <div class="text-4xl font-semibold">
      <a href="/" class="flex gap-3">
        <span> Davis Pictures </span>
      </a>
    </div>
    <div class="hidden sm:flex align-center">
      <a href="https://www.instagram.com/_davispics_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" class="flex align-center">
        <span class="icon-[mdi--instagram]"></span>
      </a>
    </div>
  </div>
</template>

<style scoped>
img {
  object-fit: contain;
}
</style>
