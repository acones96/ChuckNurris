$(document).ready(function () {
	// Makes a GET request to a specific URL and his respective callback
	$.get("https://api.chucknorris.io/jokes/random", (response) => {
		// Insert the key-value in every 'p' tag in the HTML file
		$('p').text(response.value);
	})
});