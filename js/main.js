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

var search_engines = {
	"ddg": "https://duckduckgo.com/?q=%s",
	"searx-tiekoetter": "https://searx.tiekoetter.com/search?q=%s",
	"searx-be": "https://searx.be/search?q=%s"
}

function search() {
	search_box = document.getElementById('search_box');
	window.location.href = search_engines["searx-be"].replace("%s", encodeURI(search_box.value));

	return false;
}
