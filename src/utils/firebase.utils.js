import { initializeApp } from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBMtWjRZgAfXfriWlls9J4oQmXPNzV7a64",
    authDomain: "ecom-project-ffff2.firebaseapp.com",
    projectId: "ecom-project-ffff2",
    storageBucket: "ecom-project-ffff2.appspot.com",
    messagingSenderId: "269259715117",
    appId: "1:269259715117:web:25fb28d4a69e2c000afea4"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });