$(document).ready(function () {
	// Use a for condition to create 10 different jokes
	for (let index = 0; index < 10; index++) {
		// Makes a GET request to a specific URL and his respective callback
		$.get("https://api.chucknorris.io/jokes/random", (response) => {
			// Whenever there's an <ol> tag, it will insert the key-value as a <li> tag in the HTML file
			$("ol").append('<li class= "list-group-item">' + response.value + '</li>');
			if (index == 9) {
				$('ol').append('<div class="text-bg-success p-3">Complete</div>');
			}
		})
	}
});