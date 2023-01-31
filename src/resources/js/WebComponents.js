class HTMLChuckNorrisJokeElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        for (let index = 0; index < 10; index++) {
            fetch('https://api.chucknorris.io/jokes/random')
                // Handle Response 
                .then(
                    // Convert the response into json
                    response => response.json()
                )
                // Handle Data
                .then(joke => {
                    // Whenever there's an <ol> tag, it will insert the key-value as a <li> tag in the HTML file
                    $('ol').append('<li class= "list-group-item">' + joke.value + '</li>');
                    if (index == 9) {
                        $('ol').append('<div class="text-bg-success p-3">Complete</div>');
                    }
                })
                // Handle Error
                .catch(error =>
                    // Will show which was the error in console 
                    console.log("Error encontrado: ", { error })
                );
        }
    }
}

customElements.define('chuck-norris-joke', HTMLChuckNorrisJokeElement);