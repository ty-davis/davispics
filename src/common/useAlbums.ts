import { reactive } from 'vue';

const allAlbums = reactive({
  couples: {
    name: 'Couples',
    path: '/album/Couples',
    thumbnail: 'couple_6-20-2025_small/couple_6-20-2025-1128-small.webp',
    images: [
      { name: 'couple_6-20-2025_small/couple_6-20-2025-1128-small.webp', bw: false },
      { name: 'couple_6-20-2025_small/couple_6-20-2025-1142-small.webp', bw: false },
      { name: 'couple_6-20-2025_small/couple_6-20-2025-1319-small.webp', bw: false },
      { name: 'couple_6-20-2025_small/couple_6-20-2025-1381-small.webp', bw: false },
      { name: 'couple_6-20-2025_small/couple_6-20-2025-1402-small.webp', bw: false },
      { name: 'couple_6-20-2025_small/couple_6-20-2025-1449-small.webp', bw: false },
      { name: 'couple_6-20-2025_small/couple_6-20-2025-1511-small.webp', bw: false },
      { name: 'couple_6-20-2025_small/couple_6-20-2025-1554-small.webp', bw: false },
      { name: 'couple_6-20-2025_small/couple_6-20-2025-1570-small.webp', bw: false },
      { name: 'couple_6-20-2025_small/couple_6-20-2025-1589-small.webp', bw: false },
      { name: 'couple_6-20-2025_small/couple_6-20-2025-1656-small.webp', bw: false },
      { name: 'couple_6-20-2025_small/couple_6-20-2025-1952-small.webp', bw: false },
      { name: 'small_couples/portfolio-7-small.jpg', bw: true },
      { name: 'bnb-small/bnb-0-small.jpg', bw: false },
      { name: 'bnb-small/bnb-1-small.jpg', 'bw': false},
      { name: 'bnb-small/bnb-2-small.jpg', 'bw': false},
      { name: 'bnb-small/bnb-5-small.jpg', bw: false },
      { name: 'bnb-small/bnb-4-small.jpg', bw: true },
      { name: 'bnb-small/bnb-3-small.jpg', bw: false },
    ]
  },
  newborn: {
    name: 'Newborn',
    path: '/album/Newborn',
    thumbnail: 'newborn-0475-small.jpg',
    images: [
      { name: 'newborn-0475-small.jpg', bw: false },
      { name: 'newborn-0516-2-small.jpg', bw: false },
      { name: 'newborn-0646-small.jpg', bw: false },
      { name: 'newborn-0941-small.jpg', bw: false },
      { name: 'newborn-0681-small.jpg', bw: false },
      { name: 'newborn-0809-small.jpg', bw: false },
      { name: 'newborn-0860-2-small.jpg', bw: false },
      { name: 'newborn-1007-small.jpg', bw: false }
    ]
  },
  graduation: {
    name: 'Graduation',
    path: '/album/Graduation',
    thumbnail: 'small_couples/portfolio-grad-final-9890-small.jpg',
    images: [
      { name: 'small_couples/portfolio-grad-final-9890-small.jpg', bw: false },
      { name: 'small_couples/portfolio-grad-final-0397-small.jpg', bw: true },
      { name: 'small_couples/portfolio-grad-final-0032-small.jpg', bw: false },
      { name: 'small_couples/portfolio-grad-final-0006-small.jpg', 'bw': false},
      { name: 'small_couples/portfolio-grad-final-0229-small.jpg', bw: false },
      { name: 'small_couples/portfolio-grad-final-0429-small.jpg', 'bw': false},
      { name: 'small_couples/portfolio-grad-final-0184-small.jpg', bw: false },
    ]
  },
  family: {
    name: 'Family',
    path: '/album/Family',
    thumbnail: 'small_couples/portfolio-fam--19-small.jpg',
    images: [
      { name: 'small_couples/portfolio-fam--19-small.jpg', bw: false },
      { name: 'small_couples/portfolio-fam--13-small.jpg', bw: false },
      { name: 'small_couples/portfolio-fam-0108-small.jpg', bw: true },
      { name: 'small_couples/portfolio-fam-0030-small.jpg', 'bw': false},
      { name: 'small_couples/portfolio-fam-0146-small.jpg', bw: false },
    ]
  },
  wedding: {
    name: 'Wedding',
    path: '/album/Wedding',
    thumbnail: 'small_couples/portfolio-hailey-0212-small.jpg',
    images: [
      { name: 'small_couples/portfolio-hailey-0212-small.jpg', bw: false },
      { name: 'small_couples/portfolio-hailey-0171-small.jpg', bw: true },
      { name: 'small_couples/portfolio-hailey--4-small.jpg', bw: false },
      { name: 'small_couples/portfolio-hailey-0196-small.jpg', bw: true },
      { name: 'small_couples/portfolio-hailey-0376-small.jpg', bw: false },
    ]
  },
  events: {
    name: 'Events',
    path: '/album/Events',
    thumbnail: 'shindig/shindig-Shindig-2126-small.jpg',
    images: [
      { name: 'shindig/shindig-Shindig-2126-small.jpg', 'bw': false},
      { name: 'shindig/shindig-Shindig-2311-small.jpg', 'bw': false},
      { name: 'shindig/shindig-Shindig-2324-small.jpg', 'bw': false},
      { name: 'shindig/shindig-Shindig-2387-small.jpg', 'bw': false},
      { name: 'shindig/shindig-Shindig-2413-small.jpg', 'bw': false},
      { name: 'shindig/shindig-Shindig-2649-small.jpg', 'bw': false},
      { name: 'shindig/shindig-Shindig-2696-small.jpg', 'bw': false},
      { name: 'shindig/shindig-Shindig-2757-small.jpg', 'bw': false},
    ]
  },
  misc: {
    name: 'Miscellaneous',
    path: '/album/Misc',
    thumbnail: 'night_small/night_1-25--3-small.jpg',
    images: [
      { name: 'night_small/night_1-25--3-small.jpg', bw: false },
      { name: 'night_small/night_1-25--small.jpg', bw: false },
      { name: 'night_small/night_1-25--2-small.jpg', bw: false },
    ]
  }
});

// This function provides access to the album data.
export function useAlbums() {
  return {
    allAlbums
  };
}
