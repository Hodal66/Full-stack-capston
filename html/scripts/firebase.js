// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDzMDiEECoi0sl1OMwmV8lzsC4dX8m_hTo",
    authDomain: "hodal-capston-project.firebaseapp.com",
    projectId: "hodal-capston-project",
    storageBucket: "hodal-capston-project.appspot.com",
    messagingSenderId: "301855625698",
    appId: "1:301855625698:web:4dbc87e103ce682eb369bb"
  };

  // Initialize Firebase

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //make aut and firestore references
  // enable firebase auth service
  const auth = firebase.auth();
  // enable firebase firestore service
  const db  = firebase.firestore();
//   db.settings({timeStampInShots: true});g