<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import submitForm from '../common/utils.ts';
const toast = useToast();

const form = ref({
  name: '',
  email: '',
  phone: '',
  question: '',
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

const submitQuestionForm = async () => {
  loading.value = true;

  try {
    var result = await submitForm('question', form.value);
    if (result.status === 'success' ) {
      toast.add({severity: 'info', summary: 'Info', detail: 'Email sent! We will get back to you promptly.', life: 5000})
      Object.keys(form.value).forEach(key => form.value[key] = '')
    } else {
      throw new Error(result);
    }
  } catch (error) {
    console.log("Error?")
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
      Ask a question
    </h2>
    <p>
      I'll get back to you as quick as I can!
    </p>
    <form @submit.prevent="submitQuestionForm" id="questions-form">
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
        <FloatLabel>
          <Textarea v-model="form.question" id="question" class="w-full md:w-128"/>
          <label for="question">My question</label>
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
