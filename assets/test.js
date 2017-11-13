$( document ).ready(function() {

	var searchItem = "";

	var productStore = "";

	var nextItem = 0;

    var search_key = document.getElementById("search_key");

    var submitButton = document.getElementById("submitButton");

    var config = {
    apiKey: "AIzaSyBdBaKxOu6C2piPuA9vlZiopgTAvOtRtLU",
    authDomain: "the-underdogs-webstorefront.firebaseapp.com",
    databaseURL: "https://the-underdogs-webstorefront.firebaseio.com",
    projectId: "the-underdogs-webstorefront",
    storageBucket: "the-underdogs-webstorefront.appspot.com",
    messagingSenderId: "546148526419"
    };
    firebase.initializeApp(config);
 
    var database = firebase.database();


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

function getItems(searchItem,productStore,nextItem) {
 
 switch(productStore){
 	case "bestbuy":
 	getBestbuyItems(searchItem,nextItem);
 	break;

 	case "walmart":
 	getWalmartItems(searchItem,nextItem);
 	break;

 	default:
 	getWalmartItems(searchItem,nextItem);
 }

}

function getWalmartItems(searchItem,nextItem){
 
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

         var walmartSearchDiv = $("<div class='item'>");
            
        	var name = $("<p>").text("Name: " + results[i].name);

        	var salePrice = $("<p>").text("Sale Price: $" + results[i].salePrice);

        	var description = $("<p>").text("Description: " + results[i].longDescription);

        	var url = $("<a>").text("Buy Here");

            url.attr("class", "ButtonClass")

        	url.attr("href", results[i].productUrl)

        	var rating = $("<p>").text("Rating: " + results[i].customerRating);

        	//c = _.unescape(c);

        	//console.log(c.toString());

            var walmartProductImage = $("<img>");
            
            walmartProductImage.attr("src", results[i].mediumImage);	

            walmartSearchDiv.append(name);

            walmartSearchDiv.append(walmartProductImage);

            //walmartSearchDiv.append(description);

            //walmartSearchDiv.append(salePrice);

            //walmartSearchDiv.append(rating);

            walmartSearchDiv.append(url);

			$("#resultsGoHere").prepend(walmartSearchDiv);

		}        

        });

}

function getBestbuyItems(searchItem,nextItem){

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

		var name = $("<p>").text("Name: " + results[i].name);

		var salePrice = $("<p>").text("Price: $" + results[i].regularPrice);

		var description = $("<p>").text("Description: " + results[i].longDescription);

		var url = $("<a>").text("URL: " + results[i].url);

		url.attr("href", results[i].url);

		var rating = $("<p>").text("Rating: " + results[i].customerReviewAverage);

		var bestbuyProductImage = $("<img>");

		bestbuyProductImage.attr("src", results[i].thumbnailImage);

		bestbuySearchDiv.append(name);

		bestbuySearchDiv.append(bestbuyProductImage);

		bestbuySearchDiv.append(description);

		bestbuySearchDiv.append(salePrice);

		bestbuySearchDiv.append(rating);

		bestbuySearchDiv.append(url);

		$("#resultsGoHere").prepend(bestbuySearchDiv);

	}

});

}

  $(document).on("click", "#submitButton",  function() {

  		event.preventDefault();
        
  		productStore = $("#search_param").val();

        searchItem = $("#search_key").val().trim();

        console.log(searchItem);

       getItems(searchItem, productStore, nextItem);

  // Initialize Firebase
    
      database.ref("/searches/" + searchItem).set({search: searchItem})

});

});
