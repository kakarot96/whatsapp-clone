import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCbQHgZzSB5A4-7tqCuoWo4pEi92x3Qixc",
    authDomain: "whatsapp-clone-f85be.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-f85be.firebaseio.com",
    projectId: "whatsapp-clone-f85be",
    storageBucket: "whatsapp-clone-f85be.appspot.com",
    messagingSenderId: "229034256428",
    appId: "1:229034256428:web:642d66b1f0b5e27c8e0989",
    measurementId: "G-SGCVG85KW0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db;