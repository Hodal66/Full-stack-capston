var form = document.querySelector("form");
const button = document.querySelectorAll(".btn");
const nameValue = document.getElementById("name");
const emailValue = document.getElementById("email");
const messageValue = document.getElementById("message");
const userMessage = document.querySelector(".messages");

// var Qref = firebase.database().ref("Questions/");

//write comment

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: nameValue.value,
      email: emailValue.value,
      message: messageValue.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const dataArr = [];
      dataArr.push(data);
      try {
        let contacts = dataArr.messages.val();

        userMessage.innerHTML = "";

        contacts.forEach((message) => {
          let tr = `
        <div class ="main-message">
         <div class= "message" data-id = '${message}'>
         <button > <img src="../img/Delete.png" alt="Delete" class="delete" data-id = '${message}' > </button>
         <h3>${message.name} </h3>
         <h4>Email: ${message.email} </h4>
         <p>${message.message}</p>

         </div>

        </div>`;
          // userMessage.insertBefore(tr, userMessage.firstChild)
          userMessage.innerHTML += tr;
        });
      } catch (error) {
        console.log(error);
      }
    });
console.log("message sent")
    Swal.fire({
      text: "Successfully submitted!",
      icone: "success",
    });

    setTimeout(() => {
      window.location.pathname = resolvePathname("/index.html")
    }, 3000);
});