//Creating keywords variable for people to input whatever they desire
var keywords = $("#keywords").val().trim();


//JSON shizzle added in order to search for keywords (i think)
{"jsonns.xsi":"http://www.w3.org/2001/XMLSchema-instance",
"jsonns.xs":"http://www.w3.org/2001/XMLSchema",
"jsonns.tns":"http://www.ebay.com/marketplace/search/v1/services",
"tns.findItemsByKeywordsRequest":{"keywords": keywords}}

$( document ).ready(function() {
jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});
  $(document).on("click", "#submitButton",  function() {
        event.preventDefault();
        
        var searchItem = $("#search_key").val().trim();
        console.log(searchItem);
        var ebaySearchApi = "http://svcs.ebay.com/services/search/FindingService/v1" + searchItem + "&format=json&apiKey=HenryDil-KickassS-PRD-e5d80d3bd-6ee69dd7"
        console.log(ebaySearchApi);
        $.ajax({
          url: ebaySearchApi,
          method: "GET"
        })
        .done(function(response){
            console.log(response);
        });
});
});