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
        name: "Intel i7 7820x",
        desctiption: "",
        img_url: "./resources/images/pc_components/i7_7820x.jpg"
    },
    GPU: {
        name: "NVIDIA GeForce RTX 3070 | Gigabyte AORUS",
        desctiption: "",
        img_url: "./resources/images/pc_components/i7_7820x.jpg"
    },
    Motherboard: {
        name: "",
        desctiption: "",
        img_url: "./resources/images/pc_components/x299_mobo.jpg"
    },
    RAM: {
        name: "G.Skill TridentZ 32GB DDR4-3200",
        desctiption: "",
        img_url: "./resources/images/pc_components/TridentZ_ddr4.jpg"
    },
    AIO: {
        name: "NZXT Kraken X52",
        desctiption: "",
        img_url: "./resources/images/pc_components/Kraken_x52.jpg"
    },
    PSU: {
        name: "Seasonic GX-750",
        desctiption: "",
        img_url: "./resources/images/pc_components/Focus_750W.jpg"
    },
    Fans: {
        name: "Corsair HD120",
        desctiption: "",
        img_url: "./resources/images/pc_components/HD120.jpg"
    }
}

/*
console.log(components)
*/