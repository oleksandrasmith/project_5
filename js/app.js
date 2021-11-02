window.addEventListener('load', function() {
  baguetteBox.run('#gallery');
});

// JavaScript code (https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/) *changed "x variable"
function searchThumbnails() {
	let input = document.getElementById('searchbar').value;
	input=input.toLowerCase();
	let x = document.getElementsByTagName('li');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}
