
var userMessage = document.querySelector(".container");
console.log("puuuu",userMessage)
var url = "http://localhost:5000/api/v1/contacts"
const displayMessage = async () => {
 //fetch("https://api-my-brand.herokuapp.com/api/v1/contacts")
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
              <p class="small">${message.date}</p>
          </div>
          <div>
              <p class="bold">Full-Name</p>
              <p class="small">${message.name}</p>
          </div>
          <div>
              <p class="bold">Email</p>
              <p class="small">${message.email}</p>
          </div>
          
          <div>
              
          <p class="bold">message</p>
          <p class="small">${message.message}</p>
          </div>
  
          <div>
          <button id=${message._id} onclick="deleteMe(this.id)"><i class="fa fa-trash-o"></i>
          <button>
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

  ///function to delete
  async function deleteMe(queryId) {
    console.log("id: ", queryId)
    // const urls="http://localhost:5000/api/v1/contacts";
    
    try{
      const token =localStorage.getItem('token');
      const deletequery = await fetch(`${url}/${queryId}`,{
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          "authorization": 'bearer '+token
          },
      });
      response = await deletequery.json();
      if(response?.status == 200){
        alert("query deleted")
        location.reload();
      }
        else{
          console.log("not deleted")
         }
  
    }catch(error){
      console.log(error);
  
    }
      
  }