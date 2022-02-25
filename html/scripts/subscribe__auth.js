
/*
 @role register user
*/
function subscribe(){
   
    const email = document.getElementById('email').value;
   
    auth.createUserWithEmailAndPassword(email)
      .then((userCredential) => {
        const user = userCredential.user;
         //alert("User created successfully")
        saveUserProfile({email})
       window.location.href = "./index.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error: "+errorMessage)
      });
}


/*
 @role save user profile
*/
function saveUserProfile({email}){
    db.collection('users').doc().set({
        email,
      
        created_at: new Date()
    }).then(()=>{
       alert("You successfully created account");
         window.location.href = "./index.html";
    }).catch((error)=>{
        alert(error?.message || 'An error occurred');
    })
}



