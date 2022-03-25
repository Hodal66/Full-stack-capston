

const cover = document.getElementById("imaging");
const title = document.getElementById("title-name");
const content = document.getElementById("body-message");
const author= document.getElementById("author");
const check =()=>{
  alert("DO YOU WANT TO CREATE A BLOG");
const token =localStorage.getItem('token');
//https://my-brand-endpoints.herokuapp.com/api/v1/articles

  fetch("http://localhost:9000/api/v1/articles",{
      method: "POST",
      body: JSON.stringify({
        title: title,
        author:author,
        content:content
      }),
      headers: {
        "Content-Type": "application/json",
        "authorization": 'bearer '+token
      },
    }
  )
    .then((response) => {
alert("blog created")
      
    })
    .catch((error) => {
      alert("error can not be created")
    });
};