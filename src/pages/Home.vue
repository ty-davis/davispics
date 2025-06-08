<script setup lang="ts">
  import Images from '../components/Images.vue';
  import ImageScroll from '../components/ImageScroll.vue';
  import AboutContent from '../components/AboutContent.vue';

const main_images: string[] = [
  'newborn-0475-small.jpg',
  'newborn-0516-2-small.jpg',
  'newborn-0646-small.jpg',
  'newborn-0681-small.jpg',
  'newborn-0941-small.jpg',
  'newborn-0809-small.jpg',
  'newborn-0860-2-small.jpg',
  'newborn-1007-small.jpg',
]

const family_photos = [
  {'name': 'small_couples/portfolio-fam--19-small.jpg', 'bw': false},
  {'name': 'small_couples/portfolio-fam--13-small.jpg', 'bw': false},
  {'name': 'small_couples/portfolio-fam-0108-small.jpg', 'bw': true},
  //{'name': 'small_couples/portfolio-fam-0030-small.jpg', 'bw': false},
  {'name': 'small_couples/portfolio-fam-0146-small.jpg', 'bw': false},
]

const couples = [
  {'name': 'small_couples/portfolio-7-small.jpg', 'bw': true},
  {'name': 'bnb-small/bnb-0-small.jpg', 'bw': false},
  //{'name': 'bnb-small/bnb-1-small.jpg', 'bw': false},
  //{'name': 'bnb-small/bnb-2-small.jpg', 'bw': false},
  {'name': 'bnb-small/bnb-5-small.jpg', 'bw': false},
  {'name': 'bnb-small/bnb-4-small.jpg', 'bw': true},
  {'name': 'bnb-small/bnb-3-small.jpg', 'bw': false},
]

const wedding = [
  {'name': 'small_couples/portfolio-hailey-0212-small.jpg', 'bw': false},
  {'name': 'small_couples/portfolio-hailey-0171-small.jpg', 'bw': true},
  {'name': 'small_couples/portfolio-hailey--4-small.jpg', 'bw': false},
  {'name': 'small_couples/portfolio-hailey-0196-small.jpg', 'bw': true},
  {'name': 'small_couples/portfolio-hailey-0376-small.jpg', 'bw': false},
]

const grad = [
  //{'name': 'small_couples/portfolio-grad-final-0006-small.jpg', 'bw': false},
  {'name': 'small_couples/portfolio-grad-final-9890-small.jpg', 'bw': false},
  {'name': 'small_couples/portfolio-grad-final-0397-small.jpg', 'bw': true},
  {'name': 'small_couples/portfolio-grad-final-0032-small.jpg', 'bw': false},
  {'name': 'small_couples/portfolio-grad-final-0229-small.jpg', 'bw': false},
  //{'name': 'small_couples/portfolio-grad-final-0429-small.jpg', 'bw': false},
  {'name': 'small_couples/portfolio-grad-final-0184-small.jpg', 'bw': false},
]
</script>
<template>
  <ImageScroll name="" :images="main_images"/>
  <div class="mt-8 py-1 max-w-screen-lg mx-auto">
    <h2 class="text-2xl">About Us</h2>
  </div>
  <hr class="max-w-screen-xl mx-auto"/>
  <div class="max-w-screen-lg mx-auto">
    <AboutContent bw/>
  </div>
  <Images name="Family" :images="family_photos"/>
  <Images name="Couples" :images="couples"/>
  <Images name="Wedding" :images="wedding"/>
  <Images name="Grad" :images="grad"/>
</template>
