const token = localStorage.getItem("token");
  const blogArticle = document.querySelector(".updateSide");
//console.log("mmm", blogArticle)

const displayArticle = async () => {

    fetch("https://api-my-brand.herokuapp.com/api/v1/articles", {
            method: "GET"
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("hahaha", data);

            const dataArr = [];
            dataArr.push(data);

            try {
                let articles = data.data;

                blogArticle.innerHTML = "";
                
                    let myContent =

                        ` <form action="#">
<div>
    <label for="">Update title</label>
    <input type="text" name="title" id="title" placeholder="${article.title}">
</div>
<div>
    <label for="">Update author</label>
    <input type="text" name="author" id="author" placeholder="${article.author}">
</div>
<div>
    <label for="">Update Picture</label>
   <input type="file" name="picture" id="picture">
</div>
<div>
    <input type="button" value="Submit" onclick="updateArticle()">
</div>
</form>`
                    blogArticle.innerHTML += myContent;

            

            } catch (error) {
               // alert("impossible")
                console.log(error);
            }
        });
    }

displayArticle();


/*

  const token = localStorage.getItem("token");
  const blogArticle = document.querySelector(".overviewContainer");
  //console.log("mmm", blogArticle)

  const displayArticle = async ()=>{

  fetch("https://api-my-brand.herokuapp.com/api/v1/articles", {
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

          <button onclick="deleteArticle(this.id)" id=${article._id}><a href="update.html"><i class="fa fa-edit" style="font-size:24px"></i></i></a></button>
              
              
          </div>
          
          <div>
              <button onclick="deleteArticle(this.id)" id=${article._id}><a href="#"><i class="fa fa-trash-o" style="font-size:24px"></i></a></button>
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


*/