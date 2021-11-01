function updateTime(k) {
	if (k < 10) {
		return "0" + k;
	}
	else {
		return k;
	}
}

function currentTime() {
	var date = new Date(); /* creating object of Date class */
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();

	document.getElementById("clock").innerHTML = updateTime(hour) + " : " + updateTime(min) + " : " + updateTime(sec); /* adding time to the div */
	setTimeout(function(){ currentTime() }, 1000); /* setting timer */
}
  
currentTime(); /* calling currentTime() function to initiate the process */

function searchDDG() {
	search_term = document.getElementById('search_box').value;
	window.location.href = "https://duckduckgo.com/?q=" + encodeURI(search_term);

	return false;
}
