
  const token = localStorage.getItem("token");
  const blogArticle = document.querySelector(".articleContainer");
  //console.log("mmm", blogArticle)

  const displayArticle = async ()=>{

  //const url = "http://localhost:9000/api/v1/contacts"
  fetch("http://localhost:9000/api/v1/articles", {
    method: "GET"
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("my data:: ",data);

      const dataArr = [];
      dataArr.push(data);

      try {
        let articles = data.data;
    
        blogArticle.innerHTML = "";
        articles.forEach((article) => {
          console.log("huuu: ", article.content)
          let myContent = 
          ` <div class="container">
          <div class="${article.cover} width="1200px" height="800px"">
          <img src="img_girl.jpg" alt="Girl in a jacket">
          </div>
          <div class="content">
          <div class="title">
          <h1>${article.title}</h1>
              <h3>${article.content}</h3>
              <h3 id="author" style="color:green">writen by :${article.author}</h3>

          </div>
          </div>
          
          `
         
      ;
          blogArticle.innerHTML += myContent;
          
        });
        
      } catch (error) {
        alert("impossible")
        //console.log(error);
      }
    });
  }

displayArticle();
