<script setup lang="ts">
import { useForm, useField, useFieldArray } from 'vee-validate'
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'
import { useProfileStore } from '@/stores/profileStore'

const { t } = useI18n()
const profileStore = useProfileStore()

// Schema
const schema = yup.object({
  name: yup.string().required(t('errors.required')),
  email: yup.string().email(t('errors.email')).required(t('errors.required')),
  dateOfBirth: yup.string().required(t('errors.required')),
  phones: yup.array().of(
    yup.string().required(t('errors.phone'))
  )
})

// Form Init with store data
const { handleSubmit, errors } = useForm({
  validationSchema: schema,
  initialValues: profileStore.profile
})

// Fields
const { value: name, errorMessage: nameError } = useField('name')
const { value: email, errorMessage: emailError } = useField('email')
const { value: dateOfBirth, errorMessage: dateError } = useField('dateOfBirth')

// Phones
const { fields: phones, push, remove } = useFieldArray<string>('phones')

const addPhone = () => push('')

const onSubmit = handleSubmit((data) => {
  profileStore.updateProfile(data)
  alert(t('profile.saved'))
})
</script>


<template>
  <section class="card">
    <h1>{{ t('profile.title') }}</h1>

    <form @submit.prevent="onSubmit">
      
      <div>
        <label>{{ t('profile.name') }}</label>
        <input v-model="name" type="text" />
        <span class="error">{{ nameError }}</span>
      </div>

      <div>
        <label>{{ t('profile.email') }}</label>
        <input v-model="email" type="email" />
        <span class="error">{{ emailError }}</span>
      </div>

      <div>
        <label>{{ t('profile.dob') }}</label>
        <input v-model="dateOfBirth" type="date" />
        <span class="error">{{ dateError }}</span>
      </div>

      <!-- Phones -->
      <div>
        <label>{{ t('profile.phones') }}</label>

        <div v-for="(phone, index) in phones" :key="phone.key" class="phone-row">
          <input v-model="phone.value" type="text" />
          
          <button
            type="button"
            @click="remove(index)"
            v-if="phones.length > 1"
          >X</button>

          <span class="error">{{ errors.phones?.[index] }}</span>
        </div>

        <button type="button" @click="addPhone">
          {{ t('profile.addPhone') }}
        </button>
      </div>

      <br>
      <button type="submit">{{ t('profile.save') }}</button>
    </form>
  </section>
</template>


<style scoped>
.error {
  color: red;
  font-size: 14px;
}
.card {
  padding: 20px;
}
.phone-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 4px;
}
</style>
