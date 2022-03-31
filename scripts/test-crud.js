const addPost = document.querySelector("add-post");
const updatePost = document.querySelector("update-post");
const getPost = document.querySelector("edit-post");
const deletePost = document.querySelector("delete-post");

//now my url
const deleteData = async ( ) =>{
    const response = await fetch('https://api-my-brand.herokuapp.com/api/v1/articles/1', {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: null
    });
 
   const data = await response.json( );
 
   // now do whatever you want with the data  
    console.log(data);
 };
 deleteData( );