<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import submitForm from '../common/utils.ts';
import { useToast } from 'primevue/usetoast';
const toast = useToast();

const photoshoots = [
  { 'name': 'Newborn',             'code': 'newborn', 'price': '$100' },
  { 'name': 'Graduation',          'code': 'graduation', 'price': '$100' },
  { 'name': 'Family Photos',       'code': 'family', 'price': '$200' },
  { 'name': 'Family Photos (6+)',  'code': 'family-large', 'price': '$250' },
  { 'name': 'Engagements/Couples', 'code': 'engagements-couples', 'price': '$150' },
  { 'name': 'Maternity',           'code': 'maternity', 'price': '$150' },
  { 'name': 'Bridals',             'code': 'bridals', 'price': '$250' },
  { 'name': 'Wedding Day',         'code': 'wedding-day', 'price': '$400' },
  { 'name': 'Wedding Package',     'code': 'wedding-package', 'price': '$700' },
  { 'name': 'Events',              'code': 'events', 'price': '$300' },
  { 'name': 'Other',               'code': 'other', 'price': "Let's make a deal" },
]

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
  <div class="max-w-screen-lg mx-auto px-4">
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
      <div class="flex flex-col md:flex-row">
        <div>
          <div class="my-8">
            <FloatLabel>
              <InputText v-model="form.name" type="text" required id="name"
                     class="w-full md:w-96 p-2 border rounded-md"/>
              <label for="name">Name*</label>
            </FloatLabel>
          </div>

          <div class="my-8">
            <FloatLabel>
              <InputText v-model="form.email" type="email" required id="email"
                     class="w-full md:w-96 p-2 border rounded-md"/>
              <label for="email">Email*</label>
            </FloatLabel>
          </div>

          <div class="my-8">
            <FloatLabel>
              <InputText v-model="form.phone" type="text" id="phone"
                     class="w-full md:w-96 p-2 border rounded-md"/>
              <label for="phone">Phone Number</label>
            </FloatLabel>
          </div>
        </div>
        <div class="w-full">
          <div class="my-8 md:px-4 lg:px-16">
            <h2> Prices </h2>
            <hr/>
            <div>
              <template v-for="ps in photoshoots.filter(a => !(a.code === 'other'))">
                <div class="grid grid-cols-[2fr_1fr]">
                  <div> {{ ps.name }} </div>
                  <div> {{ ps.price }} </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>

      <div class="my-8">
        <div>
        Preferred Date
        </div>

        <div class="flex-col flex md:flex-row gap-2">
          <DatePicker v-model="form.first_datetime" type="datetime-local" required 
                 class="w-full md:w-64" placeholder="First Choice*"/>
          <DatePicker v-model="form.second_datetime" type="datetime-local" required 
                 class="w-full md:w-64" placeholder="Second Choice*"/>
          <DatePicker v-model="form.third_datetime" type="datetime-local"
                 class="w-full md:w-64" placeholder="Third Choice"/>
          <hr class="md:hidden"/>
        </div>
      </div>
      
      <div>
        <Select v-model="form.type" required class="w-full md:w-64" :options="photoshoots" optionLabel="name" optionValue="code" placeholder="Photoshoot Type*"/>
      </div>

      <div class="my-8">
        <FloatLabel>
          <Textarea v-model="form.comments" id="comments" class="w-full md:w-128"/>
          <label for="comments">Comments / Questions / Requests</label>
        </FloatLabel>
      </div>
      
      
      <div class="my-8">
        <span class="block text-sm text-gray-700">* Required fields</span>
        <Button type="submit" :disabled="loading" 
                class="w-32" >
          {{ loading ? 'Loading...' : 'Send Email' }}
        </Button>
      </div>
    </form>
  </div>
</template>
<style>
.message-detail a {
  color: blue;
  text-decoration: underline;
}
</style>
