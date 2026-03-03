import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2PRINRTw521AOMVc6OT0m6DvlOBjmvSQ",
  authDomain: "recoltecheck-52bf2.firebaseapp.com",
  projectId: "recoltecheck-52bf2",
  storageBucket: "recoltecheck-52bf2.firebasestorage.app",
  messagingSenderId: "1086740089795",
  appId: "1:1086740089795:web:349733c23a6c8e25940b76",
  measurementId: "G-V9RK9J5W3Q",
};
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
