import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {

  apiKey: "AIzaSyAiqCjULVz27hLyg2gDoLiD-T3TgghHIVI",

  authDomain: "coderhouse-react-bef71.firebaseapp.com",

  projectId: "coderhouse-react-bef71",

  storageBucket: "coderhouse-react-bef71.appspot.com",

  messagingSenderId: "463334369887",

  appId: "1:463334369887:web:08b518662da3c67e7189ea"

};

const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app)