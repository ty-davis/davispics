<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  name: string,
  images: string[]
}>()

</script>

<template>
<div class="mt-8">
  <div class="max-w-screen-lg mx-auto text-xl font-light">
    {{ name }}
  </div>
  <div class="scroll-container">
    <div class="scroll-content">
      <template v-for="image in images">
        <img :src="`https://blob.davispics.com/${image}`"/>
      </template>
      <template v-for="image in images">
        <img :src="`https://blob.davispics.com/${image}`"/>
      </template>
    </div>
  </div>
</div>
</template>

<style scoped>
.scroll-container {
  overflow: hidden;
}

.scroll-content {
  display: flex;
  width: max-content;
  animation: scroll 60s linear infinite;
}
.scroll-content img {
  flex-shrink: 0;
  max-width: none;
  height: 400px
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

</style>
