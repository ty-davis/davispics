<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

// possible enum values: iphone browser mobile-browser android
const DEVICE_TYPES = Object.freeze({
  BROWSER: "0",
  IPHONE: "1",
  ANDROID: "2"
});

const detectDevice = (): string => {
  if (typeof window === 'undefined') return DEVICE_TYPES.BROWSER;
  
  const userAgent = navigator.userAgent.toLowerCase();
  console.log(navigator.userAgent);
  
  if (/iphone|ipod|ipad/.test(userAgent)) {
    return DEVICE_TYPES.IPHONE;
  } else if (/android/.test(userAgent)) {
    return DEVICE_TYPES.ANDROID;
  } else {
    return DEVICE_TYPES.BROWSER;
  }
};


const activeTab = ref(DEVICE_TYPES.IPHONE);

onMounted(() => {
  activeTab.value = detectDevice();
});
</script>
<template>
  <div class="max-w-screen-lg mx-auto px-4">
    <h2 class="text-2xl font-semibold">
      How to Download Full Resolution Photos
    </h2>
    <p class="my-2">

      I distribute photos to my clients using a photo management
      service called Immich. I want to make sure you get the
      full resolution photos on your device for printing and
      sharing with others. Follow the tutorial below to make
      sure you get the right files on your device!

    </p>

    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="0">Desktop</Tab>
        <Tab value="1">iPhone/iPad</Tab>
        <Tab value="2">Android</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">

          <h3 class="text-xl font-semibold border-b-1"> Download multiple photos at once </h3>

          <p class="my-4">

            To download all of the photos in bulk, click the download
            link in the top corner shown in red. This will download
            a zip file containing all of the photos in the album. 

          </p>

          <Image src="https://blob.davispics.com/tutorial/desktop_bulk.jpg" preview/>

          <p class="my-4">

            You can make a selection of photos for download as well
            by clicking on the small circle in the upper left corner
            of any photo. Clicking the download button with an active
            selection will download only those photos in a zip file.

          </p>

          <Image src="https://blob.davispics.com/tutorial/desktop_multiple.jpg" preview/>

          <h3 class="text-xl font-semibold my-4 border-b-1">Download a single photo</h3>

          <p class="my-4">

            To download a single photo, select it and use the same
            download button in the upper right corner of the page
            to download the photo.

          </p>

          <Image src="https://blob.davispics.com/tutorial/desktop_single.jpg" preview/>

        </TabPanel>
        <TabPanel value="1">
          
          <p class="my-4">

            iOS/iPadOS makes it a little difficult to get the full
            resolution image downloaded and in your "Photos" app. Follow
            this guide to make sure you don't just download the photo, but
            actually get it into the right place so you can find it later.
            This guide assumes you are using the Safari app.

          </p>

          <h3 class="text-xl font-semibold my-4 border-b-1">Download a single photo</h3>

          <p class="my-4">

            Tap on the photo you would like to download to focus
            on it, then tap the download button in the upper right
            corner. Tap on the "View" button (instead of the "Download"
            button) in order to see the image in full resolution
            in Safari.

          </p>

          <div class="flex justify-center">
            <Image src="https://blob.davispics.com/tutorial/iPhone_single.png" class="iphone-image" preview/>
          </div>

          <p class="my-4">
            After Safari loads the entire image, tap and hold on the image
            to open the menu, and tap "Save to Photos".
          </p>

          <div class="flex justify-center">
            <Image src="https://blob.davispics.com/tutorial/iPhone_single_2.png" class="iphone-image" preview/>
          </div>

          <h3 class="text-xl font-semibold border-b-1"> Download multiple photos at once </h3>

          <p class="my-4">

            I strongly suggest using the method above to download
            one photo at a time, or using a computer to manage lots
            of photos, because this process is somewhat complicated.
            However, if you want to multiple photos at a time and
            get them into your photos app, follow this process.

          </p>

          <p class="my-4">

            Tap and hold on a photo to select it, and then tap other
            photos to select multiple photos for download. When
            holding to select the first photo, the iOS menu for
            viewing the thumbnail may appear, simply tap away from
            the menu to dismiss it. If you wish to download the
            whole album at once, then don't select any photos and
            simply proceed to the next step.

          </p>

          <p class="my-4">

            With your selection made (or no selection to download
            the entire album), tap the download button in the upper
            right corner of the page.

          </p>

          <div class="flex justify-center">
            <Image src="https://blob.davispics.com/tutorial/iPhone_multiple_1.png" class="iphone-image" preview/>
          </div>

          <p class="my-4">

            Once the album has finished downloading, tap the "Download"
            button to save the zip file to your Files app.

          </p>

          <div class="flex justify-center">
            <Image src="https://blob.davispics.com/tutorial/iPhone_multiple_2.png" class="iphone-image" preview/>
          </div>

          <p class="my-4">

            Navigate to the downloaded zip file in your Files app.

          </p>
        </TabPanel>
        <TabPanel value="2">
          <p class="m-0">
            Android
          </p>
        </TabPanel>
      </TabPanels>
    </Tabs>

  </div>
</template>

<style>
.p-tabs * {
  background: transparent !important;
}
.iphone-image img {
  max-width: 300px !important;
  width: 100% !important;
  height: auto !important;
}
</style>
