// import { resolvePathname, showNotification } from "../init-firebase.js";
var showNotification = document.getElementById("showNotification");
showNotification.innerHTML="WELLCOME TO LOGIN";

// function validate() {
//   const form = document.getElementById("form");
//   var email = document.getElementById("email");

// var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//   var showNotification = document.getElementById("showNotification");

//   email.addEventListener("keyup", () => {
//     if (email.value.match(emailPattern)) {
//         showNotification.innerText="OK Correct Email!!"
//         showNotification.style.color="green";
//     } else {
//           showNotification.innerText="Oops inCorrect Email!!"
//         showNotification.style.color="red";
//     }
//     if (email.value == "") {
//         showNotification.innerText="OOPs !! Empty"
//         showNotification.style.color="red";
        
//     }
//   });

//   //validating password

//   const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{3,}$/;
//   var showNotification = document.getElementById("showNotification");
// var password = document.getElementById("password");

//   password.addEventListener("keyup", (e) => {
//     if (password.value.match(passwordPattern)) {
//         showNotification.innerText="OK Correct Password!!"
//         showNotification.style.color="green";
//     } else {
//         showNotification.innerText="Oops inCorrect Password!!"
//         showNotification.style.color="red";
//         showNotification.innerHTML =
//         " -should be at least 3 chracters <br>- 1 uppercase, 1 lowercase, a number.";
//         showNotification.style.color = "#ff0000";
//     }
//     if (password.value == "") {
//         showNotification.innerText="OOPs !! Empty"
//         showNotification.style.color="red";
//     }
//   });


//   //disabling button
// var submit = document.getElementById("login");
//   if (
//     !email.value.match(emailPattern) ||
//     !password.value.match(passwordPattern) 
//   ) {
//     submit.disabled = true;
//   } else {
//     submit.disabled = false;
//   }
// };

  // validate();

const email = document.getElementById("email");
const password = document.getElementById("password");
const logginBtn = document.getElementById("login");


logginBtn.addEventListener("click", async(e) => {
    e.preventDefault();

    await fetch(
            "http://localhost:9000/api/v1/users/login", {
                crossDomain: true,
                method: "POST",
                body: JSON.stringify({
                    email: email.value,
                    password: password.value,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        .then((res) => res.json())
        .then((response) => {
            console.log(response?.status);
            if (response?.name === "muheto hodal") {
              console.log(response?.name);
                alert("Login SuccessFully")
                location.href = "../html/dashboard.html";

            } else {
                alert("Unauthorised user")
                location.href = "../user_login.html";
            }
        })
        .catch((error) => {
            console.log(error);
        });
});

