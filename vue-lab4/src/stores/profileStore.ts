import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile: {
      name: '',
      email: '',
      dateOfBirth: '',
      phones: ['']
    }
  }),

  actions: {
    updateProfile(data: any) {
      this.profile = data
    }
  },

  persist: true
})
