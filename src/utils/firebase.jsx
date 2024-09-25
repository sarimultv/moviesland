// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQTVGAFWtsz3oLG7JpEdpKHqZ-diTl7YI",
  authDomain: "moviesland-e7bfe.firebaseapp.com",
  projectId: "moviesland-e7bfe",
  storageBucket: "moviesland-e7bfe.appspot.com",
  messagingSenderId: "301517829956",
  appId: "1:301517829956:web:518d5e6437998e782ec911",
  measurementId: "G-B51KM2ZCJF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
