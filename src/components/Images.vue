<script setup lang="ts">

defineProps<{
  name: string,
  images: {name: string, bw: boolean}[]
}>()

</script>

<template>
<div class="mt-8">
  <h3 class="max-w-screen-lg mx-auto text-xl font-light px-2">
    {{ name }}
  </h3>
  <div class="w-full flex justify-center">
    <div class="flex imgs-container">
      <template v-for="image in images">
        <Image :src="`https://blob.davispics.com/${image.name}`" height="400px" :class="`${image.bw ? 'bw' : ''}`" class="show-img" preview/>
      </template>
    </div>
  </div>
</div>
</template>

<style scoped>
.imgs-container {
  overflow-x: auto;
  margin-left: auto;
  margin-right: auto;
}
.imgs-container .show-img {
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
