
const titleValue = document.getElementById("title");
const authorValue = document.getElementById("author");
const textValue = document.getElementById("text");
let blogArticle = document.querySelector(".articles");
const save = document.getElementById("save");

const test = document.getElementById("me");
test.innerHTML="wellcome ooooooooooõ";

  const token = localStorage.getItem("token")

  fetch("https://api-my-brand.herokuapp.com/api/v1/articles", {
    method: "GET"
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
     `});
       
     document.getElementById("article").innerHTML += myContent;

      } catch (error) {
        console.log(error);
      }
    });
    const getBlogs = async() => {
      let result = [];
      fetch('https://api-my-brand.herokuapp.com/api/v1/articles', {
              method: "GET",
          })
          .then(response => response.json())
          .then(json => {
              result = json.data
              console.log(json.data)
  
              result?.length ?
                  document.querySelector("#article").innerHTML = result.slice(0, 3).map((res) =>
                      `
        
         <div class="image">
               <img src='${res?.cover}' width="400" alt="">
          </div>
           <div class="content" data-id = '${res?._id}'>
             <div class="title">
                   <h1>'${res?.title}'</h1>
                  <h3 id="author" style="color:green">'${res?.author}'</h3>
                  <p class="sub_title">'${res?.content}' </p>
              </div>
           </div>
        `
                  ).join("") :
                  document.querySelector("#article").innerHTML = `<img style="width:150%;"src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="spinner">`
          })
          .catch(err => console.log(err));
  }
  getBlogs();

