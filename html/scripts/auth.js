
/*
 @role register user
*/
function addUser(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
         alert("User created successfully")
        saveUserProfile({ email, password})
         window.location.href = "../dashboard.html";
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
function addUser(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.signInWithEmailAndPassword(email,password).then(userCredential => {
        const user = userCredential.user;
        localStorage.setItem('user',JSON.stringify(user))
        window.location.href = "./onboard.html";
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
function saveUserProfile({email, password}){
    db.collection('users').doc().set({

        email,
        password,
        created_at: new Date()
    }).then(()=>{
       alert("You successfully created account");
         window.location.href = "./dashboad.html";
    }).catch((error)=>{
        alert(error?.message || 'An error occurred');
    })
}

/*
 @role get profile
*/


