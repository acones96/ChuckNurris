$( document ).ready(function() {
	$.get("https://api.chucknorris.io/jokes/random", (response) => {
		let textoChiste = response.value;
		$('p').text(textoChiste);
	})
});