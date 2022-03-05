import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMGdolJ5ZbueejChMKIy8l-jlFP1ejX_s",
  authDomain: "cooking-ninja-site-d4a64.firebaseapp.com",
  projectId: "cooking-ninja-site-d4a64",
  storageBucket: "cooking-ninja-site-d4a64.appspot.com",
  messagingSenderId: "206674703774",
  appId: "1:206674703774:web:2b09b5bec43e138c3f928f",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
