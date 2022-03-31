
const titleValue = document.getElementById("title");
const authorValue = document.getElementById("author");
const textValue = document.getElementById("text");
let blogArticle = document.querySelector(".articles");
const save = document.getElementById("save");

const test = document.getElementById("me");
test.innerHTML="wellcome ooooooooooõ";
const url = "";

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(titleValue.value);

  const token = localStorage.getItem("token")
  //const url = "http://localhost:9000/api/v1/contacts"
//https://api-my-brand.herokuapp.com/api/v1/articles
  fetch("http://localhost:5000/api/v1/contacts", {
    method: "POST"
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const dataArr = [];
      dataArr.push(data);

      try {
        let articles = dataArr.blogs;
        blogArticle.innerHTML = "";
        articles.forEach((article) => {
          let myContent = `
      
          <div class="image">
              <img src='${article.cover}' width="400" alt="">
          </div>
  
          <div class="content" data-id = '${article._id}'>
              <div class="title">
                  <h1>'${article.title}'</h1>
                  <h3 id="author" style="color:green">'${article.author}'</h3>
                  <p class="sub_title">'${article.content}' </p>
              </div>
          </div>
     `;

          
        });
        document.getElementById("article").innerHTML += myContent;

      } catch (error) {
        console.log(error);
      }
    });
