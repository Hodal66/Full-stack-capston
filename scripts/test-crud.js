const addPost = document.querySelector("add-post");
const updatePost = document.querySelector("update-post");
const getPost = document.querySelector("edit-post");
const deletePost = document.querySelector("delete-post");

//now my url
const url ="http://localhost:9000/api/v1/articles";
const getResponse = Response => Response.json();
const processJson = json =>{
    console.log(json);
}
const getPosts =()=>{
    alert("wellcome")
    fetch({url}/1).then(res=>res.json()).then((data)=>{
console.log("wellcome");
    }

    )}