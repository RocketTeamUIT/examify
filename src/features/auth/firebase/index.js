import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCOV-a3lpIG1KHCwu50YZrb3vnm6Hwz4Q0',
  authDomain: 'examify-42d4d.firebaseapp.com',
  projectId: 'examify-42d4d',
  storageBucket: 'examify-42d4d.appspot.com',
  messagingSenderId: '284536982526',
  appId: '1:284536982526:web:2eadb7d85e96ab6a168eaf',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
