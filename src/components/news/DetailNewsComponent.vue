<template>
  <v-card class="mx-auto">
    <v-img
      class="align-end text-white"
      height="70vh"
      :src="data.image ? data.image : 'https://source.unsplash.com/random'"
      cover
    >
      <v-card-title>{{ data.title }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">{{ data.category.name }}</v-card-subtitle>

    <v-card-text>
      <div>{{ data.content }}</div>
      <div class="text-primary mt-5">Ditulis oleh : {{ data.writtenBy.name }}</div>
      <div class="mt-1">Tanggal Dibuat : {{ new Date(data.createdAt).toDateString() }}</div>
    </v-card-text>

    <!-- File Upload -->
    <v-card-text v-if="isUpdate">
      <v-form style="width: 300px" @submit.prevent="handlingUploadFile(data)">
        <div>
          <p style="color: red">{{ fileError }}</p>
        </div>

        <v-file-input
          label="File Input Image"
          variant="filled"
          prepend-icon="mdi-camera"
          @change="handlingChange"
        >
        </v-file-input>
        <v-btn
          type="submit"
          :disabled="fileError || !formInput"
          block
          class="my-2"
          color="blue"
          size="large"
          variant="tonal"
          >Upload File</v-btn
        >
      </v-form>
    </v-card-text>

    <v-card-actions class="d-flex justify-end">
      <v-btn class="pe-3" color="teal-accent-4" @click="$router.go(-1)"> Back </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { defineProps } from 'vue'
import { ref } from 'vue'
import { db, projectStorage } from '@/config/firebase'
import { ref as refFile, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { doc, updateDoc } from 'firebase/firestore'
import { useRoute, useRouter } from 'vue-router'
defineProps({
  data: {
    type: Object,
    required: true
  },
  isUpdate: {
    type: Boolean,
    default: false
  }
})

const file = ref(null)
const fileError = ref(null)
const filePath = ref(null)
const urlFile = ref(null)
const formInput = ref(false)

// Router
const route = useRoute()
const router = useRouter()

// Validation
const typeFile = ['image/png', 'image/jpg', 'image/jpeg']

const handlingChange = (e) => {
  const selected = e.target.files[0]
  //console.log(selected)
  if (selected && typeFile.includes(selected.type)) {
    file.value = selected
    formInput.value = true
    fileError.value = null
  } else {
    file.value = null
    fileError.value =
      'Format file yang anda upload salah. Seharusnya berformat gambar (png,jpeg,jpg)'
  }
}
const handlingUploadFile = async (data) => {
  if (file.value) {
    filePath.value = `thumbnail/${data.writtenBy.id}/${file.value.name}`
    const storageRef = refFile(projectStorage, filePath.value)
    const uploadTask = await uploadBytesResumable(storageRef, file.value)

    const getLink = await getDownloadURL(uploadTask.ref)
    urlFile.value = getLink

    try {
      // updateDocs
      await updateDoc(doc(db, 'news', route.params.id), {
        image: urlFile.value
      })
      alert('Upload File terlah berhasil')
      router.push({ name: 'News' })
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
