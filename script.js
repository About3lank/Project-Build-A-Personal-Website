//Change current text of target span tag to specified new text
function changeText(id, newText) {
    var location = document.getElementById(id).querySelector('span.target');
    location.innerText = newText;
};

//Copy to Clipboard button functionality
function copyToClipboard(textToCopy) {
    navigator.clipboard.writeText(textToCopy);
    alert('Copied: "' + textToCopy + '"');
};


//store info about components as variable
const components = {
    CPU: {
        name: "",
        desctiption: "",
        img_url: "./resources/images/pc_components/i7_7820x.jpg"
    },
    GPU: {
        name: "",
        desctiption: "",
        img_url: ""
    },
    mobo: {
        name: "",
        desctiption: "",
        img_url: ""
    },
    RAM: {
        name: "",
        desctiption: "",
        img_url: ""
    },
    AIO: {
        name: "",
        desctiption: "",
        img_url: ""
    },
    PSU: {
        name: "",
        desctiption: "",
        img_url: ""
    },
    fans: {
        name: "",
        desctiption: "",
        img_url: ""
    }
}

/*
console.log(components)
*/