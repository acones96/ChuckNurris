$(document).ready(function () {
    // Create an instance of XMLHttpRequest
    xmlhttp = new XMLHttpRequest();
    // Send a GET request to the API
    xmlhttp.open('GET', 'https://api.chucknorris.io/jokes/random/', true);
    // When the API it's on ready state, the event is fired event
    xmlhttp.onreadystatechange = function () {
        // Convert the response in json format and obtain its key-value
        let joke = JSON.parse(this.response).value;
        // Insert the joke in every 'p' tag in the HTML file
        let ps = document.getElementsByTagName('p');
        ps[0].innerHTML = joke;
    }
    // It's a method that sends the request to the server
    xmlhttp.send();
});