$(document).ready(function() {
	
	// Function calls when opening the page


	// function loadDoc() {
	// 	// Load all quotes from txt file into an object
 //  	var xhttp = new XMLHttpRequest();
 //  	xhttp.onreadystatechange = function() {
 //  	  if (this.readyState == 4 && this.status == 200) {
 //  	   var quoteString = this.responseText;
 //  	   //Create new objects with fields: id(int), Quote(string), Author(string)
 //  	   //Do this by splitting the array for every new line and pushing the values in order

 //  	  }
 //  	};
 //  	xhttp.open("GET", "quote-list.txt", true);
 //  	xhttp.send();
	// }

	function loadQuote (quoteId) {
		//fetch a random quote by id number and insert it into the html
		
		var loadedQuote = "Dummy Quote";
		var loadedAuthor = "Jason Ajax";

		$.getJSON("quote-list.json", function (data){
			var i = 0;
			var found = false;
			while (!found && i < data.length){
				if(data[i].id === quoteId){
					alert("Found " + quoteId + "!");
					loadedQuote = data[i].quote;
					loadedAuthor = data[i].author;
					found = true;
				}
				i++;
			}
		});

		$("#quote").html(loadedQuote);
		$("#author").html(loadedAuthor);

		//document.getElementById("quote").innerHTML = "Quote loaded";
		//document.getElementById("author").innerHTML = "Author";
	}

	$("#new-quote-button").on("click", function(){
		// Load a new quote from the object by clicking the button
		
		var quoteId = Math.floor(Math.random()*100);
		loadQuote(quoteId);
	});

});