
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDfOyGw1BgmZ7rn3QjuxqiSTHZL6ycHwzk",
  authDomain: "luxury-95eb5.firebaseapp.com",
  projectId: "luxury-95eb5",
  storageBucket: "luxury-95eb5.appspot.com",
  messagingSenderId: "967619250661",
  appId: "1:967619250661:web:1a1d1e83af4c3da122c70c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;