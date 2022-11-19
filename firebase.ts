// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC16S0TU927BWElCySrBhSM8FIADmJAJI",
  authDomain: "netflix-clone-2edb6.firebaseapp.com",
  projectId: "netflix-clone-2edb6",
  storageBucket: "netflix-clone-2edb6.appspot.com",
  messagingSenderId: "422014224881",
  appId: "1:422014224881:web:933fd0a179209d44f29c50"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
// const app = initializeApp(firebaseConfig);