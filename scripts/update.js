const DataId = location.search.substring(1);
const displayArticle = async () => {
	let resuimagelt = [];
	fetch("https://api-my-brand.herokuapp.com/api/v1/articles"+DataId, {
		method: "GET",

	})
		.then((response) => response.json())
		.then((json) => {
			result = json.data;
			console.log(result)
			document.getElementById("title").value = result.title;
            document.getElementById("author").value = result.image;
            document.getElementById("image").src = result.image;
			document.getElementById("content").value = result.descrption;
     })
		.catch((err) => console.log(err));
};
displayArticle();