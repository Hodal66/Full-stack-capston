
const loggedUser = () => {
  const userData = localStorage.getItem("user")
  const user = JSON.parse(userData)

  const token = localStorage.getItem("token")

  if (token) {
    var uid = user.id;
    document.querySelectorAll(".user-name").forEach((element) => {
      element.innerHTML = user.name;
    });
  }
}
loggedUser()


var logout = document.getElementById("log-out");

try {
  logout.addEventListener("click", (e) => {
    e.preventDefault();

   localStorage.clear()

      setTimeout(() => {
        window.location.pathname = resolvePathname("/blog.html")
      }, 1000);
      console.log("logged out");
    
  });
} catch (error) {
  console.log(error);
}

//displaying messages

var userMessage = document.querySelector(".messages");
console.log(userMessage)


// const url = "http://localhost:9000/api/v1/contacts";
const url = "http://localhost:9000/api/v1/contacts"
{/* <button> <img src="../img/Delete.png" alt="Delete" class="delete" data-id = '${message._id}'> </button> */}

const displayMessage = async () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      try {
        let contacts = data.messages;

        userMessage.innerHTML = "";

        contacts.forEach((message) => {
          let tr = `
           <div class="container">
        <div>
        <p class="bold" >Date::     ${message.date}</p>
            <p class="bold">Names:  ${message.name}</p>
            <p class="bold" >Email:: ${message.email}</p>
            <p class="bold" >message : ${message.message}</p>
       </div>
      <a href="#"><i class="fa fa-trash-o " style="font-size:24px" id="message1"></i></a></p>
     
    </aside>`
          // userMessage.insertBefore(tr, userMessage.firstChild)
          userMessage.innerHTML += tr;
        });
      } catch (error) {
        console.log(error);
      }
    });
};

displayMessage();

//Delete a message
let message = document.querySelector(".messages");

try {
  message.addEventListener("click", async (e) => {
    const { target } = e;

    if (target.matches(".delete")) {
      let messageId = e.target.getAttribute("data-id");
      console.log(messageId);

      const token = localStorage.getItem("token");

      fetch(`${url}/${messageId}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + token,
        }
      })
        .then((res) => {
          console.log(res.json());
        })
        .then((data) => {
          Swal.fire({
            text: "Successfully deleted!",
            icone: "success",
          });

          window.setTimeout(() => {
            location.reload();
          }, 2000);
        });
    }
  });
} catch (error) {
  console.log(error);
}
