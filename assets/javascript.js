$(document).ready(function(){

var mahKey = REg9ubiXYsGOG7EZXI1QaFgDsVC3YkXq;
var Topics = ["Movies", "Sports", "Cars"];


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
	$("$HButtons").empty();
	for (var i = 0; i < Topics.length; i++) {
		var wut = $("<button>");
		wut.addClass("gif");
		wut.attr("data-name", Topics[i]);
		wut.text(Topics[i])
		$("$HButtons").append(wut);
	}

};



// When Button is clicked//
$("#searchB").on("click", function(event){
	event.preventDefault();
	var gif = $("#sumthang").val().trim();
	Topics.push(gif);
	renderButtons();
});

});