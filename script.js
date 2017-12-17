// show and hide sections of a form
function preparePage() {
	document.getElementById("check").onclick = function() {
		if (document.getElementById("check").checked) {
			// use CSS style to show it
			document.getElementById("personalInfo").style.display = "block";
		} else {
			// hide the div
			document.getElementById("personalInfo").style.display = "none";
		}
	};
	// now hide it on the initial page load.
	document.getElementById("personalInfo").style.display = "none";
  document.getElementById("frmContact").onsubmit = function() {
		// prevent a form from submitting if no email.
		if ( (document.getElementById("email").value == "") || (document.getElementById("name").value == "")) {
			document.getElementById("errorMessage").innerHTML = "Please enter values to all fields!";
			// to STOP the form from submitting
			return false;
		} else {
			// reset and allow the form to submit
			document.getElementById("errorMessage").innerHTML = "";
			return true;
		}
	};
}

window.onload =  function() {
	preparePage();
};
