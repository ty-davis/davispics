<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import submitForm from '../common/utils.ts';
import { useToast } from 'primevue/usetoast';
const toast = useToast();

const pricingExpanded = ref(false);

const photoshoots = [
  { name: 'Newborn',             code: 'newborn',              price: '$150',               image: 'https://blob.davispics.com/newborn-0516-2-small.jpg',                                                                    duration: '1–2 hours',  countDelivered: '30+ edited photos', description: 'Celebrate your newest arrival with soft, timeless newborn portraits. Best scheduled within the first two weeks after birth.' },
  { name: 'Graduation',         code: 'graduation',           price: '$150',               image: 'https://blob.davispics.com/small_couples/portfolio-grad-final-9890-small.jpg',                                           duration: '1 hour',     countDelivered: '30+ edited photos', description: 'Mark this milestone with photos you\'ll treasure forever. We\'ll find the perfect locations to show off your achievement.' },
  { name: 'Family Photos',      code: 'family',               price: '$250',               image: 'https://blob.davispics.com/family/CamiTysonFam26-04589_1778525829.jpg',                                                  duration: '1–1.5 hours',countDelivered: '50+ edited photos', description: 'Capture your family\'s unique bond in a relaxed, fun session. Great for families up to 5 people.' },
  { name: 'Family Photos (6+)', code: 'family-large',         price: '$300',               image: 'https://blob.davispics.com/provo/provo-9761-small.jpg',                                                                  duration: '1.5–2 hours',countDelivered: '60+ edited photos', description: 'Perfect for larger families or multi-generational groups. Extra time ensures everyone looks great.' },
  { name: 'Maternity',          code: 'maternity',            price: '$200',               image: 'https://blob.davispics.com/maternity/MarynJakeMaternity26-02597_1778556658.jpg',                                         duration: '1–1.5 hours',countDelivered: '40+ edited photos', description: 'Beautiful portraits celebrating your pregnancy. Best done between 28–36 weeks. Partners and siblings welcome.' },
  { name: 'Engagements/Couples',code: 'engagements-couples',  price: '$250',               image: 'https://blob.davispics.com/couple_6-20-2025_small/couple_6-20-2025-1589-small.webp',                                    duration: '1–1.5 hours',countDelivered: '50+ edited photos', description: 'Romantic, candid portraits of you and your partner. Perfect for announcements, save-the-dates, or just because.' },
  { name: 'Bridals',            code: 'bridals',              price: '$350',               image: 'https://blob.davispics.com/bridals/JacqueAdamBridals-4642_1778556923.jpg',                                               duration: '1.5–2 hours',countDelivered: '60+ edited photos', description: 'Stunning solo portraits in your wedding dress before the big day. A cherished tradition you\'ll be glad you did.' },
  { name: 'Wedding Day',        code: 'wedding-day',          price: '$700',               image: 'https://blob.davispics.com/wedding/YanellyChris-1889_1778557216.jpg',                                                    duration: '4–6 hours',  countDelivered: '300+ edited photos',description: 'Full wedding day coverage moving with you from moment to moment. Let\'s capture every memory.' },
  { name: 'Wedding Package',    code: 'wedding-package',      price: '$1200',              image: 'https://blob.davispics.com/wedding/jacque-adam-00616_1778557031.jpg',                                                    duration: '3 sessions',   countDelivered: '400+ edited photos', description: 'Engagements, Bridals, and the Wedding Day together in a package deal.' },
  { name: 'Events',             code: 'events',               price: '$300',               image: 'https://blob.davispics.com/shindig/shindig-Shindig-2757-small.jpg',                                                      duration: '2–3 hours',  countDelivered: '100+ edited photos', description: 'Parties, corporate gatherings, recitals, reunions — we\'ll document all the energy and highlights, starting at $300 for a 3 hour event.' },
  { name: 'Other',              code: 'other',                price: "Let's make a deal",  image: '',                                                                                                                         duration: 'Flexible',   countDelivered: 'Varies',             description: 'Have something unique in mind? Reach out and we\'ll put together a custom package just for you.' },
]
const visible = ref(false);
const dialogPhotoshoot = ref({});
const openPhotoshootDialog = (name) => {
  let found = false;
  for (let photoshoot of photoshoots) {
    if (name === photoshoot.name) {
      dialogPhotoshoot.value = photoshoot;
      found = true;
      break;
    }
  }
  if (!found) {
    dialogPhotoshoot.value = photoshoots[0];
  }
  console.log(dialogPhotoshoot);
  visible.value = true;
}


const form = ref({
  name: '',
  email: '',
  phone: '',
  first_datetime: '',
  second_datetime: '',
  third_datetime: '',
  type: '',
  comments: '',
  captcha: '',
})
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const loading = ref(false)

onMounted(() => {
  // Load reCAPTCHA script
  const script = document.createElement('script')
  script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
  script.async = true;
  script.defer = true;
  script.id = 'recaptcha-script';
  document.head.appendChild(script)
})

onUnmounted(() => {
  const script = document.getElementById('recaptcha-script')
  if (script) {
    script.remove()
  }
  // Remove reCAPTCHA badge
  const badge = document.querySelector('.grecaptcha-badge')
  if (badge) {
    badge.remove()
  }
})

const submitBookForm = async () => {
  loading.value = true;

  try {
    var result = await submitForm('submit', form.value);
    console.log(result);
    if (result.status === 'success' ) {
      console.log("SUCCESS:", result);
      toast.add({severity: 'info', summary: 'Info', detail: 'Email sent! We will get back to you promptly.', life: 5000})
      Object.keys(form.value).forEach(key => form.value[key] = '')
    } else {
      throw new Error(result);
    }
  } catch (error) {
    console.log("Error")
    toast.add({severity: 'error', summary: 'Error', detail: `Could not connect to server, please try again later or email me directly at <a href="mailto:ty@davispics.com">ty@davispics.com</a>.`})
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="max-w-screen-xl mx-auto px-4">
    <Toast>
      <template #message="slotProps">
        <div class="flex flex-column">
          <div class="text-center">
            <i :class="slotProps.message.icon"></i>
            <div class="message-text text-left">
              <span class="message-summary font-semibold">{{ slotProps.message.summary }}</span>
              <div class="message-detail" v-html="slotProps.message.detail"></div>
            </div>
          </div>
        </div>
      </template>
    </Toast>
    <h2 class="text-2xl font-semibold">
      Book with us
    </h2>
    <p>
      We'd love to work with you and capture the moments that matter! Fill out this form
      and we will reach out as soon as we can!
    </p>


    <form @submit.prevent="submitBookForm" id="booking-form">
      <div class="flex flex-col-reverse md:flex-row">
        <div>
          <div class="my-8 md:w-64 lg:w-96">
            <FloatLabel>
              <InputText v-model="form.name" type="text" required id="name"
                     class="w-full p-2 border rounded-md"/>
              <label for="name">Name*</label>
            </FloatLabel>
          </div>

          <div class="my-8">
            <FloatLabel>
              <InputText v-model="form.email" type="email" required id="email"
                     class="w-full p-2 border rounded-md"/>
              <label for="email">Email*</label>
            </FloatLabel>
          </div>

          <div class="my-8">
            <FloatLabel>
              <InputText v-model="form.phone" type="text" id="phone"
                     class="w-full p-2 border rounded-md"/>
              <label for="phone">Phone Number</label>
            </FloatLabel>
          </div>

          <div>
          Preferred Date
          </div>
          <div class="flex flex-col gap-4">
            <DatePicker v-model="form.first_datetime" type="datetime-local" required 
                  class="w-full" placeholder="First Choice*"/>
            <DatePicker v-model="form.second_datetime" type="datetime-local" required 
                  class="w-full" placeholder="Second Choice*"/>
            <DatePicker v-model="form.third_datetime" type="datetime-local"
                  class="w-full" placeholder="Third Choice"/>
            <hr class="lg:hidden"/>
          </div>

          <div>
            <Select v-model="form.type" required class="w-full mt-8" :options="photoshoots" optionLabel="name" optionValue="code" placeholder="Photoshoot Type*"/>
          </div>

          <div class="my-4">
            <FloatLabel>
              <Textarea v-model="form.comments" id="comments" class="w-full"/>
              <label for="comments">Comments / Questions / Requests</label>
            </FloatLabel>
          </div>
          <div class="my-4">
            <span class="block text-sm text-gray-700">* Required fields</span>
            <Button type="submit" :disabled="loading" 
                    class="w-32" >
              {{ loading ? 'Loading...' : 'Send Email' }}
            </Button>
          </div>


        </div>
        <div class="w-full">
          <div class="my-8 md:px-4 lg:px-8 block">
            <div class="pricing-wrapper" :class="{ 'pricing-collapsed': !pricingExpanded }">
              <div class="flex flex-col md:flex-row flex-wrap w-full gap-4 justify-center">
                <template v-for="ps in photoshoots.filter(a => !(a.code === 'other'))">
                  <div class="hidden md:block">
                    <Card style="overflow:hidden" class="w-48 md:w-64">
                    <template #header>
                      <img :src="ps.image" class="w-full h-24 md:h-32 object-cover"/>
                    </template>
                    <template #title>
                      <span class="flex flex-col">
                        <span class="flex space-between items-center">
                          <span class="mr-auto"> {{ ps.price }} </span>
                          <span class="icon-[mdi--info] cursor-pointer hover:text-gray-500" @click="openPhotoshootDialog(ps.name)"></span>
                        </span>
                        <span>
                          {{ ps.name }}
                        </span>
                      </span>
                    </template>
                    </Card>
                  </div>
                  <div class="block md:hidden flex overflow-hidden rounded-xl items-center border border-gray-300">
                    <span><img :src="ps.image" class="w-16 h-8 object-cover"></img></span>
                    <span class="w-16 text-center">{{ ps.price }}</span>
                    <span>{{ ps.name }}</span>
                    <span class="icon-[mdi--info] cursor-pointer hover:text-gray-500 ml-auto mr-2" @click="openPhotoshootDialog(ps.name)"></span>
                  </div>
                </template>
              </div>
              <div v-if="!pricingExpanded" class="pricing-fade md:hidden">
                <button class="expand-btn" @click="pricingExpanded = true" aria-label="Show all prices">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
              </div>
            </div>
            <div v-if="pricingExpanded" class="collapse-row md:hidden">
              <button class="expand-btn" @click="pricingExpanded = false" aria-label="Hide prices">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="18 15 12 9 6 15"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

    </form>
  </div>
  <Dialog v-model:visible="visible" modal class="min-w-96 max-w-128" :header="dialogPhotoshoot.name">
    <div v-if="dialogPhotoshoot.image" class="mb-4">
      <img :src="dialogPhotoshoot.image" class="w-full h-64 object-cover rounded-lg"/>
    </div>
    <p class="text-gray-700 mb-4">{{ dialogPhotoshoot.description }}</p>
    <div class="flex flex-col gap-2 text-sm text-gray-600">
      <div class="flex items-center gap-2">
        <span class="icon-[mdi--clock-outline]"></span>
        <span><span class="font-semibold">Duration:</span> {{ dialogPhotoshoot.duration }}</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="icon-[mdi--image-multiple-outline]"></span>
        <span><span class="font-semibold">Photos delivered:</span> {{ dialogPhotoshoot.countDelivered }}</span>
      </div>
      <div class="flex items-center gap-2 mt-1">
        <span class="font-semibold text-base">{{ dialogPhotoshoot.price }}</span>
      </div>
    </div>
  </Dialog>
</template>
<style>
.message-detail a {
  color: blue;
  text-decoration: underline;
}

@media (max-width: 767px) {
  .pricing-wrapper {
    position: relative;
  }
  .pricing-collapsed {
    max-height: 200px;
    overflow: hidden;
  }
}

@media (max-width: 767px) {
  .pricing-fade {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 120px;
    background: linear-gradient(to bottom, transparent, white);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 0.75rem;
    pointer-events: none;
  }
}

.expand-btn {
  pointer-events: all;
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: background 0.2s ease, color 0.2s ease, transform 0.15s ease;
}

.expand-btn:hover {
  background: #f3f4f6;
  color: #111827;
  transform: scale(1.08);
}

.collapse-row {
  display: flex;
  justify-content: center;
  padding: 0.5rem 0 0.25rem;
}
</style>
