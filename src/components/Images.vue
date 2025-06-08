<script setup lang="ts">

defineProps<{
  name: string,
  images: {name: string, bw: boolean}
}>()

</script>

<template>
<div class="mt-8">
  <div class="max-w-screen-lg mx-auto text-xl font-light">
    {{ name }}
  </div>
  <div class="flex imgs-container">
    <template v-for="image in images">
      <img :src="`https://blob.davispics.com/${image.name}`" height="400px" :class="`${image.bw ? 'bw' : ''}`"/>
    </template>
  </div>
</div>
</template>

<style scoped>
.imgs-container img {
  flex-shrink: 0;
  max-width: none;
  height: 300px;
  @media only screen and (min-width: 768px) {
    height: 400px;
  }
}

.bw {
  filter: grayscale(1);
}
</style>
