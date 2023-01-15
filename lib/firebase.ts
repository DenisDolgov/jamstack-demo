import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export const app = initializeApp({
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
  apiKey: "AIzaSyBOHJ44ttrBjwFlZCgB2WfWQ-YubFdTK7w",
  authDomain: "fir-cb693.firebaseapp.com",
  projectId: "fir-cb693",
  storageBucket: "fir-cb693.appspot.com",
  messagingSenderId: "461821310526",
  appId: "1:461821310526:web:6197e17394eab3c6d2c36f"
});

export const auth = getAuth(app);
