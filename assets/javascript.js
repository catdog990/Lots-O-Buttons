$(document).ready(function(){


var topics = ["Movies", "Sports", "Cars"];


function TopInfo(){
	var tops = $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/" + tops + "?api_key=REg9ubiXYsGOG7EZXI1QaFgDsVC3YkXq&q=&limit=10&offset=0&rating=PG-13&lang=en";

	$.ajax({
		url: queryURL,
		method:"GET"
	}).done(function(response){

	})
}




function renderButtons(){
	$("#hButtons").empty();
	for (var i = 0; i < topics.length; i++) {
		var wut = $("<button>");
		wut.addClass("gif");
		wut.attr("data-name", topics[i]);
		wut.text(topics[i])
		$("#hButtons").append(wut);
	}
console.log(wut);
};




// When Button is clicked//
$("#searchB").on("click", function(event){
	event.preventDefault();
	var gif = $("#sumthang").val().trim();
	topics.push(gif);
	renderButtons();
});

});