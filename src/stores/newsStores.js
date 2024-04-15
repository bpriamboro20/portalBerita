import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { db } from '@/config/firebase'
import { useAuthStores } from './authStore'
import { useRouter } from 'vue-router'
import { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'

export const useNewsStore = defineStore('News', () => {
  // State
  const news = reactive({
    id: '',
    title: '',
    content: '',
    category: '',
    isUpdate: false
  })
  const formInput = ref(false)

  const newsData = ref(null)

  const detailNews = ref(null)

  //Router
  const router = useRouter()

  // Storage
  const authStores = useAuthStores()

  //Collection
  const newsCollection = collection(db, 'news')

  const handlerSubmit = async () => {
    if (news.isUpdate) {
      // update data
      await updateDoc(doc(newsCollection, news.id), {
        title: news.title,
        content: news.content,
        category: {
          id: news.category.id,
          name: news.category.name
        }
      })
    } else {
      // tambah data
      const now = Date.now()
      await addDoc(newsCollection, {
        title: news.title,
        content: news.content,
        category: {
          id: news.category.id,
          name: news.category.name
        },
        isApprove: false,
        image: null,
        writtenBy: {
          id: authStores.currentUser.id,
          name: authStores.currentUser.name,
          email: authStores.currentUser.email
        },
        createdAt: now
      })
      alert('Berhasil menambahkan berita')
    }
    router.push({ name: 'News' })
  }

  const allNews = async () => {
    const dataBerita = await getDocs(newsCollection)
    newsData.value = dataBerita.docs.map((doc) => {
      // console.log(doc.id, doc.data())
      return { ...doc.data(), id: doc.id }
    })
  }

  const detailHandling = async (idParams) => {
    const docRef = doc(newsCollection, idParams)
    const docDetail = await getDoc(docRef)

    detailNews.value = docDetail.data()
  }

  const clearHandling = () => {
    news.id = ''
    news.title = ''
    news.content = ''
    news.category = ''
    news.isUpdate = false
  }

  const updateHandling = async (idParams) => {
    const docRef = doc(newsCollection, idParams)
    const docDetail = await getDoc(docRef)
    news.id = docRef.id
    news.title = docDetail.data().title
    news.content = docDetail.data().content
    news.category = docDetail.data().category
    news.isUpdate = true
  }

  const deleteHandling = async (idParams) => {
    await deleteDoc(doc(newsCollection, idParams))
    alert('Delete berita telah berhasil')
    allNews()
  }

  return {
    news,
    formInput,
    handlerSubmit,
    newsData,
    allNews,
    detailNews,
    detailHandling,
    clearHandling,
    updateHandling,
    deleteHandling
  }
})
