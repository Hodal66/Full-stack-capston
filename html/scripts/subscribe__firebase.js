const firebaseConfig = {
    apiKey: "AIzaSyAs4lvsT74JaRcu2xi0TW0FsgDVk-QaLmw",
    authDomain: "subscribe-to-me-e256b.firebaseapp.com",
    projectId: "subscribe-to-me-e256b",
    storageBucket: "subscribe-to-me-e256b.appspot.com",
    messagingSenderId: "900885233631",
    appId: "1:900885233631:web:f62e88f590f0f84df10e6a"
  };
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db  = firebase.firestore();