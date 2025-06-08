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
  <div class="flex max-w-">
    <template v-for="image in images">
      <img :src="`https://blob.davispics.com/${image}`" width="600px"/>
    </template>
  </div>
</div>
</template>

<style scoped>
</style>
