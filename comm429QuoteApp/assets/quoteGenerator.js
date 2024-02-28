var quotes;
var filter = "any";

async function init() {
	const requestURL = "Matt00002.github.io/comm429QuoteApp/assets/quotes.json";
	const request = new Request(requestURL);

	const response = await fetch(request);
	quotes = await response.json();
	
	generateRandomQuote();
}

function generateRandomQuote(){
	
	setCategory();
	
	var filteredQuotes = quotes["quotes"];
	
	if(filter != "any"){
		
		filteredQuotes = quotes["quotes"].filter(quote => quote.category === filter);
		
	}
	
	rand = Math.floor(Math.random() * filteredQuotes.length);
	
	//console.log(rand);
	//console.log(quotes["quotes"][rand])
	//console.log(quoteFactory(quotes["quotes"][rand]))
	
	document.getElementById('main').insertAdjacentHTML('beforeend', quoteFactory(filteredQuotes[rand]));
	
}

function quoteFactory(quote){
	
	const quoteHTML =
	`<article class="quote">
	<buttonbutton class="close" onclick="this.parentElement.remove();">&times;</button>
	<blockquote>
		<p>${quote.quote}</p>
		<footer>-${quote.author}</footer>
	</blockquote>
</article>`;
	
	return quoteHTML;
	
}

function setCategory(){
	
	var selected = document.getElementById('select').value;
	
	filter = selected;
	
}