
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

  fetch("https://api-my-brand.herokuapp.com/api/v1/articles", {
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
     `<div class="container">
            <p class="left" '${article.title}'>add title</p><br>
            <div class="title">
                
                <input type="text" name="title" id="title" placeholder="Add Title Here" '${article.title}' >
            </div>

            <p class="left" '${article.cover}' >add picture</p><br>
            <div class="picture">
                
                <input type="file" name="file" id="file">

            </div>

            <p class="left">add article</p><br>
            <div class="add_article">
               
                <textarea class="textarea" name="area" id="area" cols="80" rows="15">
                    
                </textarea>
                <div class="create_btn">
                    <button><a href="#">Create</a></button>
                </div>
            </div>

            
        </div>`



          
        });
        document.getElementById("article").innerHTML += myContent;

      } catch (error) {
        console.log(error);
      }
    });
