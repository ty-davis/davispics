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
    <router-link to="/About" @click="handleLinkClick" :class="active('/About')" class="p-2 courier-prime-regular">About</router-link>
  </div>
  <div>
    <router-link to="/Book" @click="handleLinkClick" :class="active('/Book')" class="p-2 courier-prime-regular">Book with us</router-link>
  </div>
  <div>
    <router-link to="/Questions" @click="handleLinkClick" :class="active('/Questions')" class="p-2 courier-prime-regular">Questions</router-link>
  </div>
</template>

<style scoped>
</style>
