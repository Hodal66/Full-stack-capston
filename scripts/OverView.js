
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

         
          <button class="update" id="${article?._id}"><a href="update.html?${article?._id}" class="update">Edit</a></button>     
              
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

displayArticle();
{/* <button onclick="deleteArticle(this.id)" ><a href="update.html?${article?._id}"><i class="fa fa-edit" style="font-size:24px"></i></a></button> */}
//Delete Article
async function deleteArticle(blogId) {
  console.log("id: ", blogId)
 // const herokuUlr="https://api-my-brand.herokuapp.com/api/v1/articles";
  // const url="http://127.0.0.1/:5000/api/v1/articles";
  
  try{
    const token =localStorage.getItem('token');
    const deletequery = await fetch("https://api-my-brand.herokuapp.com/api/v1/articles/"+blogId,{
      method: 'DELETE',
      headers: {
        "authorization": 'bearer '+token
        },
    });
    response = await deletequery.json();
    if(response?.success == 200){
      alert("query deleted")
      //location.reload();
    }
      else{
        console.log("not deleted")
       }
      }catch(error){
        console.log(error);
    
      }
        
    }