<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{
  name: string,
  description: string,
  images: {name: string, bw: boolean}[],
  to: string,
  reverse?: boolean
}>()

const frontIdx = ref(0);
const dir = ref<'next' | 'prev'>('next');
const showLightbox = ref(false);

const backIdx = computed(() => (frontIdx.value + 1) % props.images.length);

const goNext = () => {
  if (props.images.length <= 1) return;
  dir.value = 'next';
  frontIdx.value = (frontIdx.value + 1) % props.images.length;
};

const goPrev = () => {
  if (props.images.length <= 1) return;
  dir.value = 'prev';
  frontIdx.value = (frontIdx.value - 1 + props.images.length) % props.images.length;
};
</script>

<template>
<div class="album-row" :class="{ 'album-row-reverse': reverse }">

  <!-- Left: carousel -->
  <div class="carousel-side">
    <button class="arrow-btn" @click="goPrev" aria-label="Previous photo">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"/>
      </svg>
    </button>

    <div class="card-stack">
      <!-- Back card (peek) -->
      <div class="card back-card" :class="{ bw: images[backIdx].bw }">
        <img :src="`https://blob.davispics.com/${images[backIdx].name}`" alt="" class="rounded-lg"/>
      </div>
      <!-- Front card -->
      <Transition :name="dir === 'next' ? 'card-next' : 'card-prev'">
        <div
          :key="frontIdx"
          class="card front-card"
          :class="{ bw: images[frontIdx].bw }"
          @click="showLightbox = true"
          title="Click to enlarge"
        >
          <img :src="`https://blob.davispics.com/${images[frontIdx].name}`" alt="Album photo" class="rounded-lg"/>
        </div>
      </Transition>
    </div>

    <button class="arrow-btn" @click="goNext" aria-label="Next photo">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    </button>
  </div>

  <!-- Right: title + description -->
  <div class="info-side">
    <router-link :to="to" class="album-title-link">
      <h3 class="album-title">{{ name }}</h3>
    </router-link>
    <p class="album-description">{{ description }}</p>
    <router-link :to="to" class="view-link">View album →</router-link>
  </div>

</div>

<!-- Lightbox -->
<Teleport to="body">
  <Transition name="lightbox-fade">
    <div
      v-if="showLightbox"
      class="lightbox-overlay"
      @click="showLightbox = false"
    >
      <img
        :src="`https://blob.davispics.com/${images[frontIdx].name}`"
        class="lightbox-img"
        :class="{ bw: images[frontIdx].bw }"
        @click.stop
        alt="Full size photo"
      />
      <button class="lightbox-close" @click="showLightbox = false" aria-label="Close">✕</button>
    </div>
  </Transition>
</Teleport>
</template>

<style scoped>
.album-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2.5rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  max-width: 900px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .album-row {
    flex-direction: row;
    align-items: center;
    gap: 3rem;
  }
  .album-row-reverse {
    flex-direction: row-reverse;
  }
}

/* --- Carousel side --- */
.carousel-side {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-shrink: 0;
}

.card-stack {
  position: relative;
  width: 220px;
  height: 280px;
  flex-shrink: 0;
}

@media (min-width: 768px) {
  .card-stack {
    width: 280px;
    height: 340px;
  }
}

/* Cards fill the stack area; image centers naturally within */
.card {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
}

.card img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}

.card.bw img {
  filter: grayscale(1);
}

.back-card {
  transform: rotate(6deg) translate(10px, 6px) scale(0.95);
  z-index: 0;
}

.front-card {
  transform: rotate(-2deg);
  z-index: 10;
  cursor: pointer;
}

/* --- Arrow buttons --- */
.arrow-btn {
  background: transparent;
  border: 1px solid #d1d5db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.2s ease, color 0.2s ease, transform 0.15s ease;
}

.arrow-btn:hover {
  background: #f3f4f6;
  color: #111827;
  transform: scale(1.08);
}

.arrow-btn:active {
  transform: scale(0.93);
}

/* --- Info side --- */
.info-side {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  text-align: center;
}

@media (min-width: 768px) {
  .info-side {
    text-align: left;
  }
}

.album-title-link {
  text-decoration: none;
}

.album-title {
  font-size: 2rem;
  font-weight: 300;
  color: #111827;
  transition: color 0.2s ease;
}

.album-title-link:hover .album-title {
  color: #6b7280;
}

.album-description {
  font-size: 0.95rem;
  color: #111827;
  line-height: 1.65;
  max-width: 32ch;
}

.view-link {
  font-size: 0.875rem;
  color: #9ca3af;
  text-decoration: none;
  letter-spacing: 0.03em;
  transition: color 0.2s ease;
}

.view-link:hover {
  color: #111827;
}

/* --- Lightbox --- */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  cursor: zoom-out;
}

.lightbox-img {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  cursor: default;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
}

.lightbox-img.bw {
  filter: grayscale(1);
}

.lightbox-close {
  position: fixed;
  top: 1.25rem;
  right: 1.5rem;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.75rem;
  line-height: 1;
  cursor: pointer;
  transition: color 0.2s ease;
}

.lightbox-close:hover {
  color: white;
}

/* Lightbox fade transition */
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.25s ease;
}
.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}

/* --- Forward transition (next) --- */
.card-next-leave-from { transform: rotate(-2deg); }
.card-next-leave-active { transition: transform 0.4s cubic-bezier(0.55, 0, 0.1, 1), opacity 0.4s ease; }
.card-next-leave-to { transform: translateX(-160%) rotate(-20deg); opacity: 0.15; }

.card-next-enter-from { transform: rotate(6deg) translate(10px, 6px) scale(0.95); opacity: 0.75; }
.card-next-enter-active { transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease; }
.card-next-enter-to { transform: rotate(-2deg); opacity: 1; }

/* --- Backward transition (prev) --- */
.card-prev-leave-from { transform: rotate(-2deg); }
.card-prev-leave-active { transition: transform 0.4s cubic-bezier(0.55, 0, 0.1, 1), opacity 0.4s ease; }
.card-prev-leave-to { transform: translateX(160%) rotate(20deg); opacity: 0.15; }

.card-prev-enter-from { transform: translateX(-160%) rotate(-14deg); opacity: 0.15; }
.card-prev-enter-active { transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease; }
.card-prev-enter-to { transform: rotate(-2deg); opacity: 1; }
</style>

