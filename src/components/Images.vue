<script setup lang="ts">

defineProps<{
  name: string,
  images: {name: string, bw: boolean}[],
  to: string
}>()

</script>

<template>
<div class="mt-8">
  <router-link :to="to">
    <div class="bg-gray-600 text-white hover:bg-gray-500 transition">
    <h3 class="max-w-screen-lg mx-auto text-3xl font-light px-2 text-center py-2">
      {{ name }}
    </h3>
    </div>
  </router-link>
  <div class="w-full flex justify-center">
    <div class="flex imgs-container">
      <template v-for="image in images">
        <Image :src="`https://blob.davispics.com/${image.name}`" :class="`${image.bw ? 'bw' : ''}`" class="show-img" preview/>
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
  display: flex;
  align-items: flex-start;
}
.imgs-container .show-img {
  flex-shrink: 0;
  display: block;
}
.imgs-container .show-img ::v-deep(img) {
  width: auto;
  height: 300px;
  object-fit: contain;
}

@media only screen and (min-width: 768px) {
  .imgs-container .show-img ::v-deep(img) {
    height: 400px;
  }
}


.bw ::v-deep(img) {
  filter: grayscale(1);
}
</style>
