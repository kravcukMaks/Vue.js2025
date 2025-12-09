<template>
  <section id="contact" class="p-6 surface-100">
    <div class="w-8 m-auto">
      <h2 class="text-center">Напишіть нам</h2>

      <Card class="mt-4 p-4">
        <form @submit.prevent="onSubmit" class="flex flex-column gap-3">

          <div>
            <label>Ім’я</label>
            <InputText v-model="name" :class="{ 'p-invalid': nameError }" />
            <small v-if="nameError" class="p-error">{{ nameError }}</small>
          </div>

          <div>
            <label>Email</label>
            <InputText v-model="email" :class="{ 'p-invalid': emailError }" />
            <small v-if="emailError" class="p-error">{{ emailError }}</small>
          </div>

          <div>
            <label>Телефон</label>
            <InputMask
              mask="+38 (999) 999-99-99"
              v-model="phone"
              :class="{ 'p-invalid': phoneError }"
            />
            <small v-if="phoneError" class="p-error">{{ phoneError }}</small>
          </div>

          <div>
            <label>Повідомлення</label>
            <Textarea v-model="message" rows="4" />
          </div>

          <div>
            <Checkbox v-model="agree" :binary="true" />
            <label class="ml-2">Погоджуюсь з політикою конфіденційності</label>
          </div>

          <Button type="submit" label="Надіслати" />
        </form>
      </Card>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Card from "primevue/card"
import InputText from "primevue/inputtext"
import InputMask from "primevue/inputmask"
import Textarea from "primevue/textarea"
import Checkbox from "primevue/checkbox"
import Button from "primevue/button"
import { useToast } from "primevue/usetoast"

const toast = useToast()

// Form state
const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')
const agree = ref(false)

// Validation
const nameError = ref('')
const emailError = ref('')
const phoneError = ref('')

const validate = () => {
  nameError.value = name.value ? '' : 'Введіть ім’я'
  emailError.value = email.value.includes('@') ? '' : 'Email некоректний'
  phoneError.value = phone.value.length > 10 ? '' : 'Введіть телефон'

  return !nameError.value && !emailError.value && !phoneError.value && agree.value
}

const onSubmit = () => {
  if (!validate()) return

  toast.add({
    severity: 'success',
    summary: 'Заявка надіслана! 🎉',
    life: 3000
  })

  name.value = email.value = phone.value = message.value = ''
  agree.value = false
}
</script>
