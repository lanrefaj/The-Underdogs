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

        var walmartSeachApi = "http://api.walmartlabs.com/v1/search?query=" + searchItem + "&format=json&apiKey=hr27d9nbvt6ysz58fchv9nuz"

        console.log(walmartSeachApi);

        $.ajax({
          url: walmartSeachApi,
          method: "GET"
        })

        .done(function(response){

        	console.log(response);
        });






});










});
