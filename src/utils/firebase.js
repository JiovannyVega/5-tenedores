import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCj7IXPaN2g4742N0rKUPjMB0vV7w4KyY8",
    authDomain: "tenedores-1ed3a.firebaseapp.com",
    projectId: "tenedores-1ed3a",
    storageBucket: "tenedores-1ed3a.appspot.com",
    messagingSenderId: "526772459755",
    appId: "1:526772459755:web:4d994803792847fbe686ae"
};

export const initFirebase = initializeApp(firebaseConfig);