// Import the functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// Your Firebase Configuration

const firebaseConfig = {

    apiKey: "AIzaSyD3DJ_s_w8jR4OwmDAIiTfiiZhszBPa-K8",

    authDomain: "learner-growth-portal.firebaseapp.com",

    projectId: "learner-growth-portal",

    storageBucket: "learner-growth-portal.firebasestorage.app",

    messagingSenderId: "687315140068",

    appId: "1:687315140068:web:36828d03c4c1c9be2b1bf1"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };