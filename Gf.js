let quotesDiv = document.getElementById('quotes');

fetch('https://love-quote-api.herokuapp.com/Love') //create or find an api for love quotes
.then(res => res.json())
.then(Love => {
	quotesDiv.innerHTML += `<p> ${Love.Love} </p>`
})


