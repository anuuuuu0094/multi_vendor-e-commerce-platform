// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { getFirestore } from 'firebase/firestore' 

const firebaseConfig = {
  apiKey: "AIzaSyCiqcKlqEM91Cs5VLaWl-xX6usM8mmyvzc",
  authDomain: "authentication-12cb2.firebaseapp.com",
  databaseURL: "https://authentication-12cb2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "authentication-12cb2",
  storageBucket: "authentication-12cb2.firebasestorage.app",
  messagingSenderId: "514647400206",
  appId: "1:514647400206:web:3667344fb34a3c3610c15f",
  measurementId: "G-0BL26D85C1"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const database = getDatabase(app)
const db = getFirestore(app) 
export { auth, database, db }