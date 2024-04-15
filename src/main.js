import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components' //v-dialog,v-app,v-drawer dll
import * as directives from 'vuetify/directives' //color,variant,position dll
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './config/firebase'

const vuetify = createVuetify({
  components,
  directives
})

let app

onAuthStateChanged(auth, () => {
  app = createApp(App)
  const pinia = createPinia()

  pinia.use(({ store }) => {
    store.router = markRaw.router
  })

  app.use(createPinia())
  app.use(router)
  app.use(vuetify)

  app.mount('#app')
})
