$(document).ready(function() {
	
	function loadQuote (quoteId) {
		//fetch a random quote by id number and insert it into the html

		$.getJSON("https://raw.githubusercontent.com/femarchi/random-quote-machine/master/quote-list.json", function (data){
			var i = 0;
			var found = false;
			
			while (!found && i < data.length){
				if(data[i].ID === quoteId){
					//alert("Found " + quoteId + "!");
					console.log(
											data[i].ID + "\n"
											+ data[i].quote + "\n"
											+ data[i].author
											);
					$("#quote").html(data[i].quote);
					$("#author").html(data[i].author);
					found = true;
				}
				i++;
			}

		});

	}

	$("#new-quote-button").on("click", function(){
		// Load a new quote from the object by clicking the button
		
		var quoteId = Math.floor(Math.random()*100);
		loadQuote(quoteId);
	});

});