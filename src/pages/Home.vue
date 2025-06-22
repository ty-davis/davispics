<script setup lang="ts">
import Images from '../components/Images.vue';
import ImageScroll from '../components/ImageScroll.vue';
import AboutContent from '../components/AboutContent.vue';
import { useAlbums } from '../common/useAlbums.ts';

const { allAlbums } = useAlbums();

const main_images: string[] = [
  'couple_6-20-2025_small/couple_6-20-2025-1952-small.webp',
  'newborn-0681-small.jpg',
  'couple_6-20-2025_small/couple_6-20-2025-1511-small.webp',
  'newborn-0646-small.jpg',
  'couple_6-20-2025_small/couple_6-20-2025-1449-small.webp',
  'couple_6-20-2025_small/couple_6-20-2025-1381-small.webp',
  'couple_6-20-2025_small/couple_6-20-2025-1656-small.webp',
  'newborn-1007-small.jpg',
]

</script>
<template>
  <ImageScroll name="" :images="main_images"/>
  <div class="mt-8 py-1 max-w-screen-lg mx-auto">
    <h2 class="text-2xl px-2">About Us</h2>
  </div>
  <hr class="max-w-screen-xl mx-auto"/>
  <div class="max-w-screen-lg mx-auto">
    <AboutContent bw/>
  </div>
  <template v-for="album in allAlbums" :key="album.name">
    <Images :name="album.name" :images="album.images" :to="album.path"/>
  </template>

  <div class="max-w-screen-md mx-auto my-6 flex items-baseline gap-4 justify-center">
    <span>
      Any questions?
    </span>
    <router-link to="/Questions">
      <Button> Get an answer </Button>
    </router-link>
  </div>
</template>
