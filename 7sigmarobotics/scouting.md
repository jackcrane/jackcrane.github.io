---
layout: home
---
<div class="logo-box">
	<h1>SCOUTING</h1>
</div>
<div class="information hidden">
	<h3>
	<br>
	<br>
	<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScJwuQBZmlEgslfGSdsTSwhDLhRKuoXw6IeKEhrt_U1yQNM8g/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
<script>
function askForPassword() {
	const password = prompt("Password:")
	if (password.toLowerCase() === "password"){
		document.querySelector(".information").classList.remove("hidden");
	} else {
		alert("Incorrect. try again");
		askForPassword();
	}
}
(function (){
	askForPassword();
})()
</script>



