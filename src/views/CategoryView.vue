<template>
  <h1>Ini adalah halaman Category</h1>
  <div class="d-flex justify-end my-6">
    <v-btn color="primary" icon="mdi-plus" size="large" @click="tambahData()" />
  </div>
  <DialogComponent v-model="dialog">
    <template #title>
      <div>
        {{ category.isUpdate ? 'Update Data' : 'Add Data' }}
      </div>
    </template>
    <template #content>
      <v-form @submit.prevent="onSubmitData" v-model="form">
        <v-text-field class="mb-1" :rules="nameRules" v-model="category.name" label="Name">
        </v-text-field>

        <v-textarea
          class="mb-1"
          :rules="descriptionRules"
          v-model="category.description"
          label="Description"
        >
        </v-textarea>

        <v-btn
          :disabled="!form"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          >{{ category.isUpdate ? 'Update' : 'Add' }}</v-btn
        >
      </v-form>
    </template>
  </DialogComponent>

  <DialogComponent v-model="dialogDetail">
    <template #title>{{ category.name }}</template>
    <template #content>{{ category.description }}</template>
  </DialogComponent>

  <DialogComponent v-model="dialogDelete">
    <template #title> Delete Category </template>
    <template #content>
      <div class="text-h6 pa-3">Yakin ingin menghapus {{ category.name }}</div>
      <v-row>
        <v-col>
          <v-btn color="primary" block @click="destroyData(category.id)">Ya</v-btn>
        </v-col>
        <v-col>
          <v-btn color="error" block @click="dialogDelete = false">Tidak</v-btn>
        </v-col>
      </v-row>
    </template>
  </DialogComponent>

  <div>
    <v-table hover>
      <thead>
        <tr>
          <th class="text-left">No</th>
          <th class="text-left">Name</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in categories" :key="item.name">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td class="text-center">
            <v-btn size="x-small" color="info" icon="mdi-information" @click="getData(item)" />
            <v-btn
              size="x-small"
              color="primary"
              icon="mdi-pencil"
              class="mx-3"
              @click="editData(item)"
            />
            <v-btn size="x-small" color="error" icon="mdi-trash-can" @click="deleteData(item)" />
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup>
import DialogComponent from '../components/dashboard/DialogComponent.vue'
import { useCategoryStore } from '@/stores/CategoryStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

//Storage
const CategoryStorage = useCategoryStore()

// state
const { category, form, dialog, categories, dialogDetail, dialogDelete } =
  storeToRefs(CategoryStorage)

// Action
const { onSubmitData, readCategory, getData, tambahData, editData, deleteData, destroyData } =
  CategoryStorage

onMounted(() => {
  readCategory()
})

// import {
//   ref,
//   reactive
//   // onMounted,
//   // onUpdated,
//   // onUnmounted,
//   // onBeforeMount,
//   // onBeforeUnmount,
//   // onBeforeUpdate
// } from 'vue'

// Materi lifecycle
// Mounted
// Mounted: Ini merujuk pada siklus hidup komponen Vue di mana komponen telah terpasang (mounted) ke dalam DOM. Pada saat ini, komponen sudah diinisialisasi, dan elemen-elemen HTML yang ada di dalamnya sudah ditambahkan ke DOM. Ini adalah titik di mana Anda biasanya melakukan operasi inisialisasi yang diperlukan, seperti mengambil data dari server atau menghubungkan ke sumber daya eksternal.
//console.log('Ini adalah fase mounted')

// onBeforeMount(() => {
//   console.log('Jalan sebelum onMounted')
// })
// Unmounted: Ini adalah fase dalam siklus hidup komponen di mana komponen Vue tidak lagi terpasang di dalam DOM. Ini terjadi ketika komponen dihapus dari DOM, entah karena perpindahan halaman, perubahan kondisi, atau penghapusan secara manual. Saat komponen tidak terpasang, sumber daya yang digunakan olehnya biasanya dibersihkan untuk mencegah kebocoran memori.
// onMounted(() => {
//   console.log('Menjalankan lifecycle OnMounted')
// })

// onBeforeUpdate(() => {
//   console.log('Jalan sebelum onUpdate')
// })

// OnUpdated:Ini adalah hook siklus hidup Vue yang dipanggil setelah komponen selesai diperbarui dengan perubahan data. Ini berarti setelah perubahan yang terjadi pada data yang diawasi (watched) oleh komponen telah diaplikasikan, Vue akan memanggil metode onUpdated di komponen tersebut. Ini sering digunakan untuk mengeksekusi kode setelah perubahan data, misalnya melakukan manipulasi DOM berdasarkan perubahan.
// onUpdated(() => {
//   console.log('Menjalankan lifecycle onUpdated')
// })

// onBeforeUnmount(() => {
//   console.log('Jalan sebelum onUnmounted')
// })

// OnUnmounted: Ini adalah hook siklus hidup Vue yang dipanggil ketika komponen akan di-unmount dari DOM, yaitu sebelum komponen dihapus dari DOM. Ini sering digunakan untuk membersihkan sumber daya yang digunakan oleh komponen sebelum komponen tersebut dihapus dari DOM, seperti membatalkan langganan (unsubscribe) dari sumber daya eksternal atau membersihkan timer.
// onUnmounted(() => {
//   confirm('Anda yakin untuk keluar dari halaman category?')
//   console.log('Menjalankan lifecycle unOnmounted')
// })

// validation
const nameRules = [
  (value) => {
    if (value) return true
    return 'Nama harus diisi'
  }
]

const descriptionRules = [
  (value) => {
    if (value) return true
    return 'Deskripsi harus diisi'
  }
]
</script>
