<template>
  <div class="max-w-screen-xl mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-center mb-8 capitalize">{{ albumName }}</h1>
    <div v-if="loading" class="text-center">
      <p>Loading images...</p>
    </div>
    <div v-else-if="error" class="text-center text-red-500">
      <p>{{ error }}</p>
    </div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="(image, index) in images" :key="index" class="group overflow-hidden rounded-lg shadow-lg">
        <Image :src="`https://blob.davispics.com/${image.name}`" 
               :alt="`${albumName} image ${index + 1}`"
               preview 
               imageClass="object-cover"
               :class="[
                 'w-full h-full transform group-hover:scale-110 transition-transform duration-300 ease-in-out', 
                 { 'filter grayscale': image.bw }
               ]" />
      </div>
    </div>
     <div class="text-center mt-8">
      <router-link to="/">
        <Button> Back to Home </Button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAlbums } from '../common/useAlbums';

const route = useRoute();
const { allAlbums } = useAlbums();

const albumName = ref('');
const images = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchAlbumData = () => {
  loading.value = true;
  error.value = null;
  try {
    const routeAlbumName = route.params.albumName;
    if (!routeAlbumName) {
      throw new Error("Album name not found in route parameters.");
    }
    const albumKey = routeAlbumName.toLowerCase();
    const albumData = allAlbums[albumKey];

    if (albumData && albumData.images) {
      albumName.value = albumData.name;
      images.value = albumData.images;
    } else {
      throw new Error(`The album "${routeAlbumName}" was not found.`);
    }
  } catch (e) {
    error.value = e.message;
    images.value = [];
    albumName.value = 'Error';
  } finally {
    loading.value = false;
  }
};

// Fetch data when the component is first mounted
onMounted(fetchAlbumData);

// Watch for changes in the route parameter and refetch data
watch(() => route.params.albumName, fetchAlbumData);
</script>
