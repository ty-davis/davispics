<script setup lang="ts">

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
        <Image :src="`https://blob.davispics.com/${image}`" class="scroll-img" preview/>
      </template>
      <template v-for="image in images">
        <Image :src="`https://blob.davispics.com/${image}`" class="scroll-img" preview/>
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
.scroll-content .scroll-img {
  flex-shrink: 0;
  max-width: none;
  height: 300px;
}

.scroll-content .scroll-img ::v-deep(img) {
  width: auto;
  height: 300px;
  object-fit: contain;
}

@media only screen and (min-width: 768px) {
  .imgs-container .show-img ::v-deep(img) {
    height: 400px;
  }
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
