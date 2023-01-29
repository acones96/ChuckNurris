$(document).ready(function () {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', 'https://api.chucknorris.io/jokes/random/', true);
    xmlhttp.onreadystatechange = function () {
        let joke = JSON.parse(this.response).value;
        let ps = document.getElementsByTagName('p');
        ps[0].innerHTML = joke;
    }
    xmlhttp.send();
});