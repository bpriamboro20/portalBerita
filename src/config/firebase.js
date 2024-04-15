// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAqVylPoK03CwDAgWRuI4V0dd8G_z_KQMM',
  authDomain: 'portalberita-24cf9.firebaseapp.com',
  projectId: 'portalberita-24cf9',
  storageBucket: 'portalberita-24cf9.appspot.com',
  messagingSenderId: '855697028813',
  appId: '1:855697028813:web:e7e363d280fc4e7f479b84'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Database
const db = getFirestore(app)
const auth = getAuth(app)
const projectStorage = getStorage(app)

export { db, auth, projectStorage }
