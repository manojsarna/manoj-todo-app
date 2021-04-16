
import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyBSjY3ukRLwfg0KOQbg_zO9ZQScvJY1I3U",
    authDomain: "todo-app-8d89b.firebaseapp.com",
    projectId: "todo-app-8d89b",
    storageBucket: "todo-app-8d89b.appspot.com",
    messagingSenderId: "117891761385",
    appId: "1:117891761385:web:45f492e26e554032c85c78"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export { db };