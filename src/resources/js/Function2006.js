$(document).ready(function () {
	$.get("https://api.chucknorris.io/jokes/random", (response) => {
		let joke = response.value;
		$('p').text(joke);
	})
});