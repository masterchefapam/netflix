import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDUFi5wySyhm6LP1mT3aygN8Dy7su7yVpQ",
  authDomain: "netflix-f1a31.firebaseapp.com",
  projectId: "netflix-f1a31",
  storageBucket: "netflix-f1a31.appspot.com",
  messagingSenderId: "817687424014",
  appId: "1:817687424014:web:079decec6938c0a94e605f"
};


const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebase.auth();

export { auth }
export default db;


