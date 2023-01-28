$(document).ready(function () {
	for (let index = 0; index < 10; index++) {
		$.get("https://api.chucknorris.io/jokes/random", (response) => {
			$("ol").append('<li class= "lead list-group-item">' + response.value + '</li>');
		})
	}
});