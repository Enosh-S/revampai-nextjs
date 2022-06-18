// Import the functions you need from the SDKs you need

import { getAnalytics } from 'firebase/analytics';
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCdowZjDeSyOHV0ReMXr09FsCvT8AKKLU8',
  authDomain: 'revamp-ai.firebaseapp.com',
  projectId: 'revamp-ai',
  storageBucket: 'revamp-ai.appspot.com',
  messagingSenderId: '1090983906436',
  appId: '1:1090983906436:web:e56fe7380ebaedee9c86d1',
  measurementId: 'G-RX87NWGKND',
};

// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const analytics = getAnalytics(app);

export { db };
