<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { use2450Albums } from '../common/useAlbums';

const route = useRoute();
const { all2450Albums } = use2450Albums();

const albumName = ref('');
const images = ref([]);
const summary = ref('');
const loading = ref(true);
const error = ref(null);

const fetchAlbumData = () => {
    loading.value = true;
    error.value = null;
    try {
        const routeProjectName = route.params.project;
        if (!routeProjectName) {
            throw new Error("Project name not found in route parameters.");
        }
        const albumKey = routeProjectName.toLowerCase();
        const albumData = all2450Albums[albumKey];

        if (albumData) {
            albumName.value = albumData.name;
            images.value = albumData.images;
            summary.value = albumData.summary;
        } else {
            throw new Error(`The album "${routeProjectName}" was not found.`)
        }
    } catch (e) {
        error.value = e.message;
        images.value = [];
        albumName.value = 'Error';
        summary.value = '';
    } finally {
        loading.value = false;
    }
}


onMounted(fetchAlbumData);

</script>

<template>
    <div class="max-w-screen-lg mx-auto">
        <div v-if="error" class="bg-red-200 rounded-md border-red-500 border p-2">
            {{ error }}
        </div>

        <h2 class="text-2xl font-semibold"> {{ albumName }} </h2>
        <div v-html="summary" class="flex flex-col gap-4 my-4"></div>

        <div>
            <template v-for="(image, index) in images">
                <div class="mx-auto mb-32 flex justify-center">
                    <div>
                        <Image :src="image.url" preview :data-index="index" :imageStyle="{ maxWidth: '800px', maxHeight: '800px'}"/>
                        <div>
                            <span> Image #{{ index + 1 }}<span v-if="image.caption">: </span> {{ image.caption }} </span>
                        </div>
                    </div>
                </div>
            </template>
        </div>


    </div>
</template>

<style scoped>

</style>
