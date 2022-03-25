
  const token = localStorage.getItem("token");
  const blogArticle = document.querySelector(".overviewContainer");
  //console.log("mmm", blogArticle)

  const displayArticle = async ()=>{

  //const url = "http://localhost:9000/api/v1/contacts"
  fetch("http://localhost:9000/api/v1/articles", {
    method: "GET"
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("hahaha",data);

      const dataArr = [];
      dataArr.push(data);

      try {
        let articles = data.data;
    
        blogArticle.innerHTML = "";
        articles.forEach((article) => {
          let myContent = 
          ` <div class="container">
          <div>
              <p class="bold">Date</p>
              <p>${article.createdAt}</p>
          </div>
          <div>
              <p class="bold">Article</p>
              <p>${article.title}</p>
          </div>
          <div>
              <p class="bold">Author</p>
              <p>${article.author}</p>
          </div>
          
          <div>
              <i class="fa fa-edit" style="font-size:24px"></i>
              
          </div>
          
          <div>
              <p><a href="#"><i class="fa fa-trash-o" style="font-size:24px"></i></a></p>
          </div>
          </div>`;
          blogArticle.innerHTML += myContent;
          
        });
        
      } catch (error) {
        alert("impossible")
        //console.log(error);
      }
    });
  }

displayArticle();

