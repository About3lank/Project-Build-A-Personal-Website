function changeText(id, newText) {
    var location = document.getElementById(id).querySelector('span.target');
    location.innerText = newText;
};


function copyToClipboard(textToCopy) {
    navigator.clipboard.writeText(textToCopy);
    alert('Copied: "' + textToCopy + '"');
};
