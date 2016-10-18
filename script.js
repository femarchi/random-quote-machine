$(document).ready(function() {
	
	//keep track of current status to avoid repetition (to implement)
	var currentID = 0;
	var currentColor = "#359BE8";

	var bgColor = function() {
		//generate a new background color avoiding repetitions
		var colorArray = ["#55F04E", "#FF58C9", "#9C9C94", "#FFB333", "#359BE8"];
		var newColor = currentColor;
		while (newColor === currentColor) {
			newColor = colorArray[Math.floor(Math.random()*(colorArray.length))];
		}
		currentColor = newColor;
		$("#page-wrapper").css("background-color", currentColor);
	}

	function loadQuote () {
		//fetch a random quote by id number and insert it into the html

		$.getJSON("https://raw.githubusercontent.com/femarchi/random-quote-machine/master/quote-list.json", function (data){
			var i = 0;
			var found = false;

			var quoteId = currentID;
			while (quoteId === currentID){
				quoteId = Math.floor(Math.random()*data.length);	
			}
			currentID = quoteId;
			
			while (!found && i < data.length){
				if(data[i].ID === quoteId){
					$("#quotes-area").css("opacity", 0);
					$("#quotes-area").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', 
    function() {
	    			$("#quote").html(data[i].quote);
						$("#author").html(data[i].author);

						// update twitter share button
						var tweetText = data[i].quote + " -" + data[i].author;
						tweetText = encodeURIComponent(tweetText.trim());
						var tweetLink = "https://twitter.com/intent/tweet?text=" + tweetText;
						console.log(tweetText);
						$("#twitter-btn").attr("href", tweetLink);
	          $("#quotes-area").css("opacity", 1);
    });
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