function modalize(modalOpts) {

	var modal = document.getElementById(modalOpts);

	var span = document.getElementById(modalOpts + "close");

	  modal.style.display = "block";

	span.onclick = function() {
	  modal.style.display = "none";
	}

	window.onclick = function(event) {
	  if (event.target == modal) {
	    modal.style.display = "none";
	  }
	}

}