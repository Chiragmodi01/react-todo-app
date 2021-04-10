import firebase from "firebase";


var firebaseConfig = {
    apiKey: "AIzaSyBiLAZZ0wLXOTu8Im7R1qajTLZWk5qiXwY",
    authDomain: "todoapp-82a69.firebaseapp.com",
    projectId: "todoapp-82a69",
    storageBucket: "todoapp-82a69.appspot.com",
    messagingSenderId: "59153950803",
    appId: "1:59153950803:web:d177427de174d67cba3ea6"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export { db };
