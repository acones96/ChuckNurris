$(document).ready(function () {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', 'https://api.chucknorris.io/jokes/random/', true);
    xmlhttp.onreadystatechange = function () {
        let textoChiste = JSON.parse(this.response).value;
        console.log('chiste recibido: ' + textoChiste);
        let ps = document.getElementsByTagName('p');
        ps[0].innerHTML = textoChiste;
    }
    xmlhttp.send();
});