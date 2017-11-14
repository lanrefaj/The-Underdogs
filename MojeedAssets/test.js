$( document ).ready(function() {

	var searchItem = "";

	var productStore = "";

	var nextItem = 0;

jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

 $('.search-panel .dropdown-menu').find('a').click(function(e) {
		e.preventDefault();
		var param = $(this).attr("href").replace("#","");
		var concept = $(this).text();
		$('.search-panel span#search_concept').text(concept);
		$('.input-group #search_param').val(param);
	});

  $(document).on("click", "#submitButton",  function() {

  		event.preventDefault();
        


        searchItem = $("#search_key").val().trim();

        console.log(searchItem);

        searchItem = searchItem.replace(' ', '+');

        var walmartSeachApi = "http://api.walmartlabs.com/v1/search?query=" + searchItem + "&format=json&apiKey=hr27d9nbvt6ysz58fchv9nuz"

        console.log(walmartSeachApi);

        $.ajax({
          url: walmartSeachApi,
          method: "GET"
        })

        .done(function(response){

        	console.log(response);
        	var results = response.items;

        console.log(JSON.stringify(results));
        
         $("#resultsGoHere").empty();

        for (var i = 0; i < results.length; i++) {

         var walmartSearchDiv = $("<div class='picture'>");

            
        	var a = $("<p>").text("Name: " + results[i].name);

        	var b = $("<p>").text("Sale Price: " + results[i].salePrice);

        	var c = $("<p>").text("Description: " + results[i].longDescription);

        	var d = $("<p>").text("URL: " + results[i].productUrl);

        	var e = $("<p>").text("Rating: " + results[i].customerRating);

            
            var walmartProductImage = $("<img>");
            
            walmartProductImage.attr("src", results[i].mediumImage);	

            walmartSearchDiv.append(a);

            walmartSearchDiv.append(walmartProductImage);

            walmartSearchDiv.append(c);

            walmartSearchDiv.append(b);

            walmartSearchDiv.append(e);

            walmartSearchDiv.append(d);

			$("#resultsGoHere").prepend(walmartSearchDiv);
		}        



        });


       

});










});
