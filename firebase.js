import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyArpkOsnM2m0t8n83L6P2XkN10CH4zSxL0",
    authDomain: "docs-clone-39c4a.firebaseapp.com",
    projectId: "docs-clone-39c4a",
    storageBucket: "docs-clone-39c4a.appspot.com",
    messagingSenderId: "974140854338",
    appId: "1:974140854338:web:e083efe9f5b81982d75ddb"
  };


  const app =  !firebase.apps.length ?
  firebase.initializeApp(firebaseConfig) : 
  firebase.app()

  const db = app.firestore()
  export default db