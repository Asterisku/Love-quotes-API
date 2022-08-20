let quotesDiv = document.getElementById('quotes');

fetch('https://love-quote-api.herokuapp.com/Love') //create or find an api for love quotes
.then(res => res.json())
.then(Love => {
	quotesDiv.innerHTML += `<p> ${Love.Love} </p>`
})


let catButton = document.getElementById('get-cat');
catButton.addEventListener("click", evt =>{

	let catDiv = document.getElementById('cat-pic')

	fetch('https://api.thecatapi.com/v1/images/search?')
	.then(res => res.json())
	.then(cats => {
		cats.forEach(cat => {
			catDiv.innerHTML = `<h3>Here is this cute cat wishing you a good day! </h3>
			<img src="${cat.url}" alt="kitty" />`
		});
	})



})

