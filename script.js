//Change current text of target span tag to specified new text
function changeText(id, newText) {
    var location = document.getElementById(id).querySelector('span.target');
    location.innerText = newText;
};

//Copy to Clipboard button functionality
function copyToClipboard(textToCopy) {
    navigator.clipboard.writeText(textToCopy);

    //Alert that text has been copied
    alert('Copied: "' + textToCopy + '"');
};

//Change multiple HTML text and image fields in component description text-box simultaneously
function changeComponent(component) {

    //clear default Hover instructions from text-box
    var divIMG = document.getElementById('part-img')
    divIMG.innerHTML = ""

    //search components object for component, store details in variables
    var name = components[component].name;
    var description1 = components[component].description1;
    var description2 = components[component].description2;
    var img_url = components[component].img_url;

    //create element for component img
    var img = document.createElement('img');
    img.src = img_url;
    img.id = "componentIMG";
    //append element to part-img div
    divIMG.appendChild(img);

    //execute changeText function for each detail
    changeText('part-name', name);
    changeText('part-description1', description1);
    changeText('part-description2', description2);


}


//store info about components as variable
const components = {
    CPU: {
        name: "CPU: Intel i7 7820x",
        description1: "The Central Processing Unit (CPU) is responsible for processing and executing instructions and acts as the brain of the PC.",
        description2: " The i7 7820x is an 8 core / 16 thread CPU with a base clock frequency of 3.6 GHz. Thanks to a liquid cooling solution, the unit pictured in this PC is overclocked and stable at 4.7 GHz on all cores.",
        img_url: "./resources/images/pc_components/i7_7820x.jpg"
    },
    GPU: {
        name: "GPU: NVIDIA GeForce RTX 3070 | Gigabyte AORUS",
        description1: "The Graphics Processing Unit (GPU) is a specialized processor designed to accelerate graphics rendering.",
        description2: "The GeForce RTX 3070 is built on NVIDIA's RTX architecture. This particular model is manufactured by Gigabyte and has a useful display for monitoring on-board tempuratures.",
        img_url: "./resources/images/pc_components/RTX_3070.jpg"
    },
    Motherboard: {
        name: "Motherboard: MSI X299 Gaming Pro Carbon AC",
        description1: "The Motherboard is the main circuit board in a computer that connects all other components, allowing them to communicate and distribute power.",
        description2: "This motherboard is manufactured by MSI and features Intel's X299 chipset.",
        img_url: "./resources/images/pc_components/x299_mobo.jpg"
    },
    RAM: {
        name: "RAM: G.Skill TridentZ 32GB DDR4-3200 (8x4)",
        description1: "Random Access Memory (RAM) is a computer's short-term memory storage. Data stored on RAM can be accessed almost instantly by applications and programs that are currently in use.",
        description2: "This PC contains 4 RAM modules and each offers the system 8 GB of memory, totaling 32 GB of available RAM.",
        img_url: "./resources/images/pc_components/TridentZ_ddr4.jpg"
    },
    AIO: {
        name: "Liquid Cooler AIO: NZXT Kraken X52",
        description1: "A CPU Cooler makes contact with the processor's integrated heat spreader (IHS) and dissipates heat. Their complexity varies widely across use cases. Some use a simple single-fan design. Others offload heat to a radiator by pumping liquid coolant through a custom-built loop of tubing.",
        description2: "This PC has an all-in-one (AIO) liquid cooler. This middle-ground solution places components of a custom loop into a convenient, more affordable form factor.",
        img_url: "./resources/images/pc_components/Kraken_x52.jpg"
    },
    PSU: {
        name: "PSU: Seasonic FOCUS GX-750 750W",
        description1: "The Power Supply Unit (PSU) converts high voltage alternating current (AC) from an outlet into direct current (DC), regulates that current, and distributes it to system components. Under heavy computing loads, a PC can consume a lot of power.",
        description2: "This power supply is rated to supply up to 750 watts to the system under 100% load. It sits underneath a shroud for a more organized and aesthetic look.",
        img_url: "./resources/images/pc_components/Focus_750W.jpg"
    },
    Fans: {
        name: "Case Fans: Corsair HD120 120mm RGB",
        description1: "Fans cool down components by displacing hot air. They're typically oriented to create directional air flow.",
        description2: "This PC uses eight 120mm case fans. Fans on the right-hand side intake cool air and fans along the top and left-hand side exhaust hot air.",
        img_url: "./resources/images/pc_components/HD120.jpg"
    }
}

/*
console.log(components)
*/