function changeText(id, newText) {
    var location = document.getElementById(id).querySelector('span.target');
    location.innerText = newText;
}