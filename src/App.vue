<template>
  <Nav/>
  <router-view></router-view>
  <!-- <ImageScroll name="" :images="main_images"/> -->
  <!-- <Images name="Newborn" :images="newborn_images"/> -->
</template>

<script setup lang="ts">
import Nav from './components/Nav.vue';

const main_images = [
  'ryker-0475.jpg',
  'ryker-0516-2.jpg',
  'ryker-0646.jpg',
  'ryker-0681.jpg',
  'ryker-0941.jpg',
  'ryker-0809.jpg',
  'ryker-0860-2.jpg',
  'ryker-1007.jpg',
]

const newborn_images = [
  'ryker-0475.jpg',
  'ryker-0516-2.jpg',
  'ryker-1007.jpg',
  'ryker-0646-2.jpg',
  'ryker-0681.jpg',
];
</script>

<style scoped>
</style>
