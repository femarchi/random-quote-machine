$(document).ready(function() {
	
	//keep track of current status to avoid repetition (to implement)
	var currentID = 0;
	var currentColor = "";

	var bgColor = function() {
		//generate a new background color
		var colorArray = ["lightgray", "gray", "darkgray", "black"];
		var newColor = colorArray[Math.floor(Math.random()*(colorArray.length))];
		$("#page-wrapper").css("background-color", newColor);
		currentColor = newColor;
	}

	function loadQuote () {
		//fetch a random quote by id number and insert it into the html

		$.getJSON("https://raw.githubusercontent.com/femarchi/random-quote-machine/master/quote-list.json", function (data){
			var i = 0;
			var found = false;
			var quoteId = Math.floor(Math.random()*data.length);
			//console.log(currentID);
			
			while (!found && i < data.length){
				if(data[i].ID === quoteId){
					// console.log(
					// 						data[i].ID + "\n"
					// 						+ data[i].quote + "\n"
					// 						+ data[i].author
					// 						);
					$("#quote").html(data[i].quote);
					$("#author").html(data[i].author);
					currentID = quoteId;
					found = true;
				}
				i++;
			}

		});

	}

	$("#new-quote-button").on("click", function(){
		// button click changes quote and bgcolor
		loadQuote();
		bgColor();
	});

});