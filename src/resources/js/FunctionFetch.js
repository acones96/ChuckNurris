// Use a for condition to create 10 different jokes
for (let index = 0; index < 10; index++) {
    // Allow us to made request to a specific API
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
        })
        // Handle Error
        .catch(error =>
            // Will show which was the error in console 
            console.log("Error encontrado: ", { error })
        );
}