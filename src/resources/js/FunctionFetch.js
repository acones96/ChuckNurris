for (let index = 0; index < 10; index++) {
    fetch('https://api.chucknorris.io/jokes/random')
        // Handle Response 
        .then(response => response.json() // Convert into json
        )
        // Handle Data
        .then(joke => {
            $('ol').append('<li class= "lead list-group-item">' + joke.value + '</li>');
        })
        // Handle Error
        .catch(error =>
            console.log("Error encontrado: ", { error })
        );
}