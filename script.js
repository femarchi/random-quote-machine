$(document).ready(function() {
	
	var quoteList = "";
	loadDoc();

	function loadDoc() {
		// Load all quotes from txt file into an object
  	var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
  	  if (this.readyState == 4 && this.status == 200) {
  	   quoteList = this.responseText;
  	   //Create new objects with fields: ID(int), Quote(string), Author(string)
  	   //Do this by splitting the array for every new line and pushing the values in order
  	   
  	  }
  	};
  	xhttp.open("GET", "quote-list.txt", true);
  	xhttp.send();
	}	

	function loadNewQuote (quotes) {
		//fetch a random quote by id number and insert it into the html
		
		document.getElementById("quote").innerHTML = "Quote loaded";
		document.getElementById("author").innerHTML = "Author";
	}

	$("#new-quote-button").click(function(){
		// Load a new quote from the object by clicking the button
		// 
		// alert("working");
		loadNewQuote(quoteList);
	});

});