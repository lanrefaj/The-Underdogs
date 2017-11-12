$( document ).ready(function() {

jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = "https://cors-anywhere.herokuapp.com/" + options.url;
    }

});
/*make ajax call and use 
*/
  $(document).on("click", "#submitButton",  function() {
        event.preventDefault();
        
        var searchItem = $("#search_key").val().trim();

        console.log(searchItem);

        searchItem = searchItem.replace(' ', '&search=');

        var bestbuySearchApi = "https://api.bestbuy.com/v1/products((search=" + searchItem + "))?apiKey=5ReGnRKGq2prXr05cc8d23cg&sort=customerReviewAverage.asc&show=customerReviewAverage,description,image,longDescription,mobileUrl,name,regularPrice,salePrice,shortDescription,thumbnailImage,url&format=json";

        console.log(bestbuySearchApi);

        $.ajax({
		url: bestbuySearchApi,
		method: "GET"


		})



	.done(function(response){

	console.log(response);

	var results = response.products;

	console.log(JSON.stringify(results));

	 $("#resultsGoHere").empty();

	for (var i = 0; i < results.length; i++) {

		var bestbuySearchDiv = $("<div class='item'>");

		var f = $("<p>").text("Name: " + results[i].name);

		var g = $("<p>").text("Price: $" + results[i].regularPrice);

		var h = $("<p>").text("Description: " + results[i].longDescription);

		var k = $("<p>").text("URL: " + results[i].url);

		var j = $("<p>").text("Rating: " + results[i].customerReviewAverage);

		var bestbuyProductImage = $("<img>");

		bestbuyProductImage.attr("src", results[i].thumbnailImage);

		bestbuySearchDiv.append(f);

		bestbuySearchDiv.append(bestbuyProductImage);

		bestbuySearchDiv.append(h);

		bestbuySearchDiv.append(g);

		bestbuySearchDiv.append(j);

		bestbuySearchDiv.append(k);

		$("#resultsGoHere").prepend(bestbuySearchDiv);





	}




});


});

});
