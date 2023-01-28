for (let index = 0; index < 10; index++) {
    fetch('https://api.chucknorris.io/jokes/random')
        // Handle Response 
        .then(response => response.json() // Convert into json
        )
        // Handle Data
        .then(response => {
            $('ol').append('<li class= "lead list-group-item">' + response.value + '</li>');
        })
        // Handle Error
        .catch(error =>
            console.log("Error encontrado: ", { error })
        );
}