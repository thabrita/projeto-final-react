// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase }  from 'firebase/database'
import { Database } from "phosphor-react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATD8SS260xRzZOtIs9mbP97lkVNMiSD3s",
  authDomain: "projeto-final-pretalab-190b2.firebaseapp.com",
  projectId: "projeto-final-pretalab-190b2",
  storageBucket: "projeto-final-pretalab-190b2.appspot.com",
  messagingSenderId: "160474981145",
  appId: "1:160474981145:web:6d8247436f2e812e3b9b88",
  databaseURL: "https://projeto-final-pretalab-190b2-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const database = getDatabase()

export { database }