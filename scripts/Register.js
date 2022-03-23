var showNotification = document.getElementById("showNotification");
showNotification.innerHTML="WELLCOME TO REGISTER";
function validate() {
  const FullName = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const submit = document.querySelector("#submit");

  var namePattern = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;

  //validating name

  FullName.addEventListener("keyup", (e) => {
    if (FullName.value.match(namePattern)) {
        showNotification.innerText="OK Correct Name!!"
        showNotification.style.color="green";
    } else {
        showNotification.innerText="Invalid Name";
        showNotification.style.color="red";
    }
    if (FullName.value === "") {
        showNotification.innerText="OOPs !! Empty"
        showNotification.style.color="red";
        
    }
  });

  //validating email

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  var showNotification = document.getElementById("showNotification");

  email.addEventListener("keyup", () => {
    if (email.value.match(emailPattern)) {
        showNotification.innerText="OK Correct Email!!"
        showNotification.style.color="green";
    } else {
          showNotification.innerText="Oops inCorrect Email!!"
        showNotification.style.color="red";
    }
    if (email.value == "") {
        showNotification.innerText="OOPs !! Empty"
        showNotification.style.color="red";
        
    }
  });

  //validating password

  const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{3,}$/;
  var showNotification = document.getElementById("showNotification");

  password.addEventListener("keyup", () => {
    if (password.value.match(passwordPattern)) {
        showNotification.innerText="OK Correct Password!!"
        showNotification.style.color="green";
    } else {
        showNotification.innerText="Oops inCorrect Password!!"
        showNotification.style.color="red";
        showNotification.innerHTML =
        " -should be at least 3 chracters <br>- 1 uppercase, 1 lowercase, a number.";
        showNotification.style.color = "#ff0000";
    }
    if (password.value == "") {
        showNotification.innerText="OOPs !! Empty"
        showNotification.style.color="red";
    }
  });

  var password2Indicator = document.getElementById("password2Valid");


  //disabling button

  if (
    !FullName.value.match(namePattern) ||
    !email.value.match(emailPattern) ||
    !password.value.match(passwordPattern) 
  ) {
    submit.disabled = true;
  } else {
    submit.disabled = false;
  }
};

  validate();








//!!Register a new user
// const url = "http://localhost:9000/api/v1/users/register";
// const url = "https://api-my-brand.herokuapp.com/api/v1/users/register";

// const form = document.querySelector("form");

// const submit = document.querySelector("#submit");

// submit.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const name = document.getElementById("name");
//   const email = document.getElementById("email");
//   const password = document.getElementById("password");

//   let myBody = {
//     name: name.value,
//     email: email.value,
//     password: password.value,
//   };

//   $.ajax({
//     url: url,
//     data: myBody,
//     method: "POST",
//     success: (response) => {

//       showNotification(
//         `Dear <b class="text-primary">${response.name}</b>, Your account has been created.`
//       );
//       console.log(response);

//       setTimeout(() => {
//         window.location.pathname = resolvePathname("/login.html");
//       }, 4000);
          
//     },
    
//     error: (error) => {
//       console.log(error);
//       showNotification(error.message, "error");
//     },
//   });

// });





var form = document.querySelector("form");
var submitButton = document.getElementById("submit")

async function addUser(e) {
    alert();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const name = document.getElementById("name").value;

  console.log(email,password,name);
  try {
      const SignUp = await fetch("http://localhost:9000/api/v1/users/register", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              name: name,
              email: email,
              password: password,
          }),
      });
      response = await SignUp.json();
    //   if (response.status == 201) {
    //      alert("success User Created");
    //       window.location.href = "../html/dashboad.html";
    //   } else {
    //     // alert("not registered");
    //       window.location.href = "../html/index.html";
    //   }
  } catch (error) {
      
  }
}

form.addEventListener('submit', (e) =>{
e.preventDefault()
console.log("form Clicked!!!")
})
// addUser()