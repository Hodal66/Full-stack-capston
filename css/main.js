

function addUser(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const fullName = document.getElementById('fullName').value;
    
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // alert("User created successfully")
      saveUserProfile({fullNamel, email})
      // window.location.href = "./index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error: "+errorMessage)
    });
}
/*
@role register user
*/
function loginUser(){
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email,password).then(userCredential => {
      const user = userCredential.user;
      localStorage.setItem('user',JSON.stringify(user))
      window.location.href = "../blog.html";
  })
  .catch(error => {
      const errorCode = error.code;
      const errorMessage = error?.message;
      alert(errorMessage || "An error occurred");
  });
}

/*
@role save user profile
*/
function saveUserProfile({fullName, email}){
  db.collection('users').doc().set({
      fullName,     
      email,
      created_at: new Date()
  }).then(()=>{
     alert("You successfully created account");
       window.location.href = "./index.html";
  }).catch((error)=>{
      alert(error?.message || 'An error occurred');
  })
}

/*
@role get profile
*/