

const cover = document.getElementById("file");
const title = document.getElementById("title-name");
const content = document.getElementById("area");
const author= document.getElementById("author");
const button = document.getElementById("button");


const createBlog = () =>{

button.addEventListener("click", (e)=>{
  console.log("Huuuuuup!!")
e.preventDefault()

  alert("DO YOU WANT TO CREATE A BLOG");
const token =localStorage.getItem('token');
//https://my-brand-endpoints.herokuapp.com/api/v1/articles
const url = "http://localhost:5000/api/v1/articles"
const body = { 
  author:author.value,
  title:title.value,
  content:content.value
}
console.log("huyyyyy",body.author)
  console.log("body: ", body)

  fetch(url,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  )
    .then((response) => {
      console.log("mamama: ", response)
// alert("blog created")
      
    })
    .catch((error) => {
      // alert("error can not be created")
    });
})
}

createBlog()
