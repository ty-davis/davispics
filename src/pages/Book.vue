<script setup>
import { ref, onMounted } from 'vue';
import InputText from 'primevue/inputtext';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import Textarea from 'primevue/textarea';
import FloatLabel from 'primevue/floatlabel';

const photoshoots = [
  { 'name': 'Portfolio', 'code': 'portfolio' },
  { 'name': 'Newborn', 'code': 'newborn' },
  { 'name': 'Graduation', 'code': 'graduation' },
  { 'name': 'Family Photos', 'code': 'family' },
  { 'name': 'Engagements', 'code': 'engagements' },
  { 'name': 'Bridals', 'code': 'bridals' },
  { 'name': 'Other', 'code': 'other'},
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
  document.head.appendChild(script)
})

function onSubmit(token) {
  document.getElementById("booking-form").submit();
}

const submitForm = async () => {
  loading.value = true
  console.log("I'm here 1")

  // 1. Get the reCAPTCHA token
  grecaptcha.ready(() => {
    console.log("I'm here 2")
    grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' }).then(async (token) => {
      form.value.captcha = token;
      console.log("I'm here 3")

      // 2. Send form data (including the token) to your backend
      try {
        const response = await fetch('https://book.davispics.com/submit', { // Use http for local development
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form.value)
        })

        if (response.ok) {
          alert('Request sent successfully!')
          Object.keys(form.value).forEach(key => form.value[key] = '')
        } else {
          const errorData = await response.text();
          throw new Error(`Failed to send: ${errorData}`)
        }
      } catch (error) {
        console.error('Submission error:', error);
        alert(error.message)
      } finally {
        loading.value = false
      }
    });
  });
}
</script>

<template>
  <div class="max-w-screen-lg mx-auto px-4">
    <h2 class="text-2xl font-semibold">
      Book with us
    </h2>
    <p>
      We'd love to work with you and capture the moments that matter! Fill out this form
      and we will reach out as soon as we can!
    </p>

    <form @submit.prevent="submitForm" id="booking-form">
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
