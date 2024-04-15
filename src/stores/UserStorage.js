import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'

export const useUserStorage = defineStore('user', () => {
  const userData = ref([
    {
      name: 'Bayu Aji Priamboro',
      email: 'bpriamboro20'
    }
  ])
  const userInput = reactive({
    name: '',
    email: ''
  })

  const clearInput = () => {
    userInput.name = ''
    userInput.email = ''
  }

  const tambahUser = () => {
    userData.value.push({
      name: userInput.name,
      email: userInput.email
    })
    clearInput()
  }

  const jumlahUser = computed(() => {
    return userData.value.length
  })
  return { userData, userInput, tambahUser, jumlahUser }
})
