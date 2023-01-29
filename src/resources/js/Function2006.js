$(document).ready(function () {
	// Makes a GET request to a specific URL and his respective callback
	$.get("https://api.chucknorris.io/jokes/random", (response) => {
		// Obtain its key-value and storage it in joke variable
		let joke = response.value;
		// Insert the joke in every 'p' tag in the HTML file
		$('p').text(joke);
	})
});