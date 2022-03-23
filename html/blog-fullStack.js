
// const loggedUser = () => {
//   const userData = localStorage.getItem("user")
//   const user = JSON.parse(userData)

//   const token = localStorage.getItem("token")

//   if (token) {
//     var uid = user.id;

//     document.querySelectorAll(".user-name").forEach((element) => {
//       element.innerHTML = user.name;
//     });
    
//     document.querySelectorAll(".logged-in").forEach((element) => {
//       element.style.display = "block";
//     });

//     document.querySelectorAll(".logged-out").forEach((element) => {
//       element.style.display = "none";
//     });
//     // ...
//   } else {
//     // User is signed out // ...
//     document.querySelectorAll(".logged-in").forEach((element) => {
//       element.style.display = "none";
//     });
//   }
// };

// loggedUser()


// logout
// const logout = document.querySelector("#log-out");
// logout.addEventListener("click", (e) => {
//   e.preventDefault();
 
//   localStorage.clear();

//     setTimeout(() => {
//       window.location.pathname = resolvePathname("/blog.html");
//     }, 2000);
  
// });


const all =document.getElementById("all");
all.innerHTML="wellcome";


//Displaying blog post
let blogArticle = document.querySelector(".container");
https://api-my-brand.herokuapp.com/api/v1//blogs";
const url ="https://api-my-brand.herokuapp.com/api/v1/blogs";


const displayArticle = async () =>{
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      try {     
      let articles = data.blogs;
      blogArticle.innerHTML = "";
      articles.forEach((article) => {
        let tr = `
            <div class="articles">
                <div class="article" data-id = '${article._id}'>
                    <h3>${article.title}</h3>
                   <p>${article.body}</p>
                    <em> <h4>Written by ${article.author}</h4> </em> 
                <div id="submit-comment"></div>
                <a class="logged-in btn btn-read" href="#p" data-ref="${article}">read more</a>
                </div>
            </div>`;
        //     <div class="image">
        //     <img src='${article._id}' width="400" alt="">
        // </div>

        // <div class="content">

        //     <div class="title">
                 
             //   <p>${article.author}</p>

        //         <h1>'${article.title}'</h1>
        //         <p class='${article.content}'> <a href="continew_blog.html"><b><i>Continue </i></b></a></p>
        //     </div>

        // </div>

        blogArticle.innerHTML += tr;
      });
    } catch (error) {
        console.log(error)
    }
    });
}

displayArticle();


