// Detects the id of the button
let btn = document.getElementById("btn");

// Detect a click on the button
btn.addEventListener('click', () => {
    // Generate 10 different jokes in console
    for (let index = 0; index < 10; index++) {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(joke => console.log(joke.value + "\n"));
    }
})
