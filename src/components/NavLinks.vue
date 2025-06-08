<script setup lang="ts">
  import { useRoute } from 'vue-router';
  const emit = defineEmits(['close-drawer']);
  const route = useRoute();

  const active = (r: string) => {
    return route.path === r ? 'border-b-2' : '';
  }
  const handleLinkClick = () => {
    emit('close-drawer');
  }
</script>
<template>
  <div>
    <router-link to="/About" @click="handleLinkClick" :class="active('/About')" class="p-2">About</router-link>
  </div>
  <div>
    <router-link to="/Book" @click="handleLinkClick" :class="active('/Book')" class="p-2">Book with us</router-link>
  </div>
  <div>
    <router-link to="/Portfolio" @click="handleLinkClick" :class="active('/Portfolio')" class="p-2">Portfolio</router-link>
  </div>
</template>
