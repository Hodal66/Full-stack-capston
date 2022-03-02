const firebaseConfig = {
    apiKey: "AIzaSyASodDozSvmJlOdWJp1wGvdktaorerI2Gk",
    authDomain: "home-message-storage.firebaseapp.com",
    projectId: "home-message-storage",
    storageBucket: "home-message-storage.appspot.com",
    messagingSenderId: "941892969417",
    appId: "1:941892969417:web:5242eb277ec80764813e18"
  };


  firebase.initializeApp(firebaseConfig);

  const db  = firebase.firestore();