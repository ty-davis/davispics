<script setup lang="ts">
  //import Images from '../components/Images.vue';
  import ImageScroll from '../components/ImageScroll.vue';
  import AboutContent from '../components/AboutContent.vue';

const main_images = [
  'ryker-0475-small.jpg',
  'ryker-0516-2-small.jpg',
  'ryker-0646-small.jpg',
  'ryker-0681-small.jpg',
  'ryker-0941-small.jpg',
  'ryker-0809-small.jpg',
  'ryker-0860-2-small.jpg',
  'ryker-1007-small.jpg',
]

//const newborn_images = [
//  'ryker-0475.jpg',
//  'ryker-0516-2.jpg',
//  'ryker-1007.jpg',
//  'ryker-0646-2.jpg',
//  'ryker-0681.jpg',
//];
</script>
<template>
  <ImageScroll name="" :images="main_images"/>
  <div class="mt-8 py-1 max-w-screen-lg mx-auto">
    <span class="text-2xl">About Us</span>
  </div>
  <hr class="max-w-screen-xl mx-auto"/>
  <div class="max-w-screen-lg mx-auto">
    <AboutContent bw/>
  </div>
  <!-- <Images name="Newborn" :images="newborn_images"/> -->
</template>
