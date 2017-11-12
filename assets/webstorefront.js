$( document ).ready(function() {

	console.log( "ready!" );

	for (var i = 0; i < items; i++) {
    	var newdiv = $('<div>')
    	newdiv.text(items[i])
    	$('#test').append(newdiv)
    }

});