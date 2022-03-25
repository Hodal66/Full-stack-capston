// const loggedUser = () => {
//   const userData = localStorage.getItem("user")
//   const user = JSON.parse(userData)

//   const token = localStorage.getItem("token")

//   if (token) {
//     var uid = user.id;
//     document.querySelectorAll(".user-name").forEach((element) => {
//       element.innerHTML = user.name;
//     });
//   }
// }
// loggedUser()


// var logout = document.getElementById("log-out");

// try {
//   logout.addEventListener("click", (e) => {
//     e.preventDefault();

//    localStorage.clear()

//       setTimeout(() => {
//         window.location.pathname = resolvePathname("/blog.html")
//       }, 1000);
//       console.log("logged out");

//   });
// } catch (error) {
//   console.log(error);
// }

//displaying messages

var userMessage = document.querySelector(".container");
console.log("puuuu",userMessage)
const url = "http://localhost:9000/api/v1/contacts"
const displayMessage = async () => {
  // fetch("https://api-my-brand.herokuapp.com/api/v1/contacts")
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      try {
        let contacts = data.messages;
console.log("my Data:: ",contacts);
        userMessage.innerHTML = ''
        contacts.forEach((message) => {
          let tr = `
           
   <div class="container">
          <div>
              <p class="bold">Date</p>
              <p>${message.date}</p>
          </div>
          <div>
              <p class="bold">Full-Name</p>
              <p>${message.name}</p>
          </div>
          <div>
              <p class="bold">Email</p>
              <p>${message.email}</p>
          </div>
          
          <div>
              
          <p class="bold">message</p>
          <p>${message.message}</p>
          </div>
          
          <div>
              <p><a href="#"><i class="fa fa-trash-o" style="font-size:24px"></i></a></p>
          </div>
          </div>
`

          // userMessage.insertBefore(tr, userMessage.firstChild)
          userMessage.innerHTML += tr;
        });
       
      } catch (error) {
        console.log(error);
      }
    });
};

displayMessage();

// const token = localStorage.getItem("token");
// function deleteMessage(message) {
//   const id =message;

// fetch(`http://api-my-brand.herokuapp.com/api/v1/contacts/${id}`, {
// method: 'DELETE',
// headers: {"Content-type": "application/json", 
// "authorization": 'bearer '+token
//  }
// })
// .then(function (response) {

// location.reload();
//     console.log(response);
//  })
// }