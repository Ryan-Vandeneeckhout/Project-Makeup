import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyActQyiZswn0CtRUIvkLu455G_y0GYp6d0",
  authDomain: "juno-project-three-c4c6b.firebaseapp.com",
  projectId: "juno-project-three-c4c6b",
  storageBucket: "juno-project-three-c4c6b.appspot.com",
  messagingSenderId: "879250242280",
  appId: "1:879250242280:web:9c644da71034178e72275d",
  measurementId: "G-8C15VNX60X"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export { db }
