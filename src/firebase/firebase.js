import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8-vw7ROgBxvXHMal9KKIpNGy955rAtdc",
  authDomain: "hotel-booking-e5730.firebaseapp.com",
  projectId: "hotel-booking-e5730",
  storageBucket: "hotel-booking-e5730.appspot.com",
  messagingSenderId: "872145693269",
  appId: "1:872145693269:web:9d2af4735e77aa9d8642dc",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
