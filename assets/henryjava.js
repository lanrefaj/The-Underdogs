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
        var bestbuySearchApi = "https://api.bestbuy.com/v1/products()?apiKey=5ReGnRKGq2prXr05cc8d23cg&sort=name.asc&show=name&facet=name,3&format=json" + searchItem + "&format=json&apiKey=5ReGnRKGq2prXr05cc8d23cg"
        console.log(bestbuySearchApi);
var bestbuySearchAPI = "https://api.bestbuy.com/v1/products()?apiKey=5ReGnRKGq2prXr05cc8d23cg&sort=name.asc&show=name&facet=name,3&format=json";
$.ajax({
url: bestbuySearchAPI,
method: "GET"
})
.done(function(response){
console.log(response);
});
});
});
/*
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.bestbuy.com/v1/products", false);
xhr.send();
console.log(xhr.status);
console.log(xhr.statusText);
})
*/