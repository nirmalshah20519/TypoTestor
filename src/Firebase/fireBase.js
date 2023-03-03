import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDEME0aQbOgGy5Ewq4ddxVoBuW-qpyoHTA",
    authDomain: "typing-speed-testor-1122.firebaseapp.com",
    projectId: "typing-speed-testor-1122",
    storageBucket: "typing-speed-testor-1122.appspot.com",
    messagingSenderId: "448428224619",
    appId: "1:448428224619:web:840ca8552333b6421cc12e",
    measurementId: "G-5MSQ0X95V4"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);