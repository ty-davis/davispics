<script setup lang="ts">
defineProps<{
  bw?: boolean,
}>()
</script>

<template>
  <div class="flex py-2 gap-2 flex-col-reverse md:flex md:flex-row">
    <div class="flex-shrink-0 md:self-center mx-auto">
      <Image :src="`https://blob.davispics.com/${bw ?? false ? 'tnt_3_bw-9613.jpg' : 'tnt_3-9613.jpg'}`" class="max-w-[400px] mx-auto md:mx-0 object-cover aspect-[3/2]" alt="Ty &amp; Trish" preview/>
    </div>
    <div class="flex flex-col px-2 gap-4 justify-center">
      <p>
        My name is Ty Davis. My wife Trish and I think every
        moment captured is a moment kept forever.
        We love working together to seize the perfect shot,
        and we enjoy taking photos of everything, from portraits,
        to weddings, to landscapes.
      </p>
      <p>
        Photography began as a hobby when we decided to splurge on
        a camera and start taking photos. We loved learning about
        utilizing light, composing the perfect shot, and conveying
        emotion and purpose with a picture.
      </p>
    </div>
  </div>
</template>
