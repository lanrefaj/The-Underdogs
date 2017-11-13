$( document ).ready(function() {

	$('#ToggleSideBar').on('click', function () {
		$('#UnderdogsNav').toggleClass('NavHome');
	});

		// form validation

	function validateSearchBtn() {
	//	var variablenameinAlexsCode = document.forms["nameofForminAexscode"]["nameinInputtype"].value;
	//	if (x == "") {
		alert("Please enter a search value");
		return false;
	}

	//	update code in HTML for text data only,update with ID name for Search function from Alex html, 		input a placeholder for populating error message in HTML and set id to placeHolderErr, 	review  

	function textfunction() {
	//		var textValidity = document.getElementById("?????");
		if (textValidity.checkValidity() == false) {
		document.getElementById("placeHolderErr").innerHTML = textValidity.innerHTMLvariable;
		}
		else {
			document.getElementById("placeHolderErr").innerHTML = "One second, we will get you some results";
		}
	}

	// setcustomvalidity form validation
});

