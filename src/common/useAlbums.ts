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
      { name: 'provo/provo-9761-small.jpg', 'bw': false},
      { name: 'provo/provo-0057-small.jpg', 'bw': false},
      { name: 'provo/provo-9919-small.jpg', 'bw': false},
      { name: 'provo/provo-9741-small.jpg', 'bw': false},
      { name: 'provo/provo-9789-small.jpg', 'bw': false},
      { name: 'provo/provo-9946-small.jpg', 'bw': false},
      { name: 'encinitas/encinitas-2977-small.jpg', 'bw': false},
      { name: 'encinitas/encinitas-3012-small.jpg', 'bw': false},
      { name: 'encinitas/encinitas-3133-small.jpg', 'bw': false},
      { name: 'encinitas/encinitas-3341-small.jpg', 'bw': false},
      { name: 'encinitas/encinitas-3555-small.jpg', 'bw': false},
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
      { name: 'night_small/night_1-25--2-small.jpg', bw: false },
      { name: 'tetons/tetons-9733-small.jpg', 'bw': false},
      { name: 'tetons/tetons-9575-small.jpg', 'bw': false},
      { name: 'tetons/tetons-9614-small.jpg', 'bw': false},
      { name: 'night_small/night_1-25--small.jpg', bw: false },
    ]
  }
});

// This function provides access to the album data.
export function useAlbums() {
  return {
    allAlbums
  };
}

const project2summary = `
<p>

I chose to do the self-portrait version of project 2,
giving me a chance to make use of my new intervalometer.

</p>

<p>

My goal with this project was to show a bit of who I
am. I love being outdoors, I love sports, and I love
being creative. I grew up playing baseball and it has
always been one of my favorite sports. While I never
had the athleticism to make it anywhere playing baseball,
I still feel like it's a part of who I am.

</p>

<p>

I like to consider myself a musician, and before I got
into photography it was certainly my main creative outlet.
Personally, I play piano more than guitar, but the guitar
is much more portable and made it into the shoot.

</p>

<p>

I'm pretty happy with how this turned out, though it's certainly
new for me to take photos of myself.

</p>


`;


const project3summary = `

<p>

For Project 3 I found the work of Diana Nygren fascinating
and wanted to replicate it. Here's a
link to <a class="text-blue-500 hover:underline"
href="https://lenscratch.com/2025/10/diana-cheren-nygren-mother-earth/"
target="_blank">
her album</a> which you should check out. The album
features a technique I've never seen before and which
I tried to imitate, and I'm quite proud of the results.

</p>

<p>

In her album, she strictly used photos of natural scenes
as "backgrounds", and overlaid manmade creations on
top. I wanted to do some of the same, but decided it
would be interested to take some manmade scenes as "backgrounds"
as well. The most difficult part of this project was
determining how to compose two shots into one, and maximizing
the effect afterwards in post without letting one image
dominate the other.

</p>

<p>

What resulted from this project is an album I made with
the intent of analyzing the worth of our manmade creations,
and the effects of our actions on nature. I hope to
inspire a feeling of respect for the natural Earth,
which is a beautiful gift given to us. I hope we can
stop to think about the process of societal growth,
and the environmental strain of urban sprawl.

</p>

<p>

I hope you enjoy. :)

</p>

`;


const all2450Albums = reactive({
  project3: {
    name: 'Project 3 - Ty Davis',
    summary: project3summary,
    path: '/art2450/project3',
    images: [
      { url: 'https://blob.davispics.com/project3-full/project1final--2_1765429292.jpg' },
      { url: 'https://blob.davispics.com/project3-full/project1final--6_1765429301.jpg' },
      { url: 'https://blob.davispics.com/project3-full/project1final-_1765429291.jpg', },
      { url: 'https://blob.davispics.com/project3-full/project1final--3_1765429295.jpg' },
      { url: 'https://blob.davispics.com/project3-full/project1final--5_1765429299.jpg' },
      { url: 'https://blob.davispics.com/project3-full/project1final--4_1765429297.jpg' },
      { url: 'https://blob.davispics.com/project3-full/project1final-0206_1765429303.jpg' },
    ]
  },
  project2: {
    name: 'Project 2 - Ty Davis',
    summary: project2summary,
    path: '/art2450/project2',
    images: [
      { url: 'https://blob.davispics.com/project2/project2final-0478.jpg' },
      { url: 'https://blob.davispics.com/project2/project2final-0369.jpg' },
      { url: 'https://blob.davispics.com/project2/project2final-0512.jpg' },
      { url: 'https://blob.davispics.com/project2/project2final-0491.jpg' },
      { url: 'https://blob.davispics.com/project2/project2final-0538.jpg' },
      { url: 'https://blob.davispics.com/project2/project2final-0547.jpg' },
      { url: 'https://blob.davispics.com/project2/project2final-0586.jpg' },
    ]
  }
});


export function use2450Albums() {
  return {
    all2450Albums
  };
}
