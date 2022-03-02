
/*
 @role register user
*/
function addMessage(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('message').value;
    
    auth.createUserWithEmailAndPassword(name,email)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("User created successfully")
        saveUserProfile({name, email, message})
       window.location.href = "./index.html";
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
// function loginUser(){
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     auth.signInWithEmailAndPassword(email,password).then(userCredential => {
//         const user = userCredential.user;
//         localStorage.setItem('user',JSON.stringify(user))
//         window.location.href = "./dashboard.html";
//     })
//     .catch(error => {
//         const errorCode = error.code;
//         const errorMessage = error?.message;
//         alert(errorMessage || "An error occurred");
//     });
// }

/*
 @role save user profile
*/
function saveUserProfile({name, email, message}){
    db.collection('users').doc().set({
        name,
        email,
        message,
        created_at: new Date()
    }).then(()=>{
       alert("You successfully created account");
         window.location.href = "./index.html";
    }).catch((error)=>{
        alert(error?.message || 'An error occurred');
    })
}



