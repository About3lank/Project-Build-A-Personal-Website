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

//Function to change multiple HTML text and image fields in component description text-box simultaneously
function changeComponent(component) {
    //search components object for component, store details in variables
    var name = components[component].name;
    var description1 = components[component].description1;
    var description2 = components[component].description2;
    var img_url = components[component].img_url;

    //execute changeText function for each detail
    changeText('part-name', name);
    changeText('part-description1', description1);
    changeText('part-description1', description2);


}


//store info about components as variable
const components = {
    CPU: {
        name: "Intel i7 7820x",
        description1: "The Central Processing Unit (CPU) is responsible for processing and executing instructions and acts as the brain of the PC.",
        description2: " The i7 7820x is an 8 core / 16 threaded CPU with a base clock frequency of 3.6 GHz. Thanks to a liquid cooling solution, the i7 7820x in this PC is overclocked and stable at 4.7 GHz on all cores.",
        img_url: "./resources/images/pc_components/i7_7820x.jpg"
    },
    GPU: {
        name: "NVIDIA GeForce RTX 3070 | Gigabyte AORUS",
        description1: "The Graphics Processing Unit (GPU) is a specialized processor designed to accelerate graphics rendering.",
        description2: "The GeForce RTX 3070 is built on NVIDIA's RTX architecture and contains Ray Tracing and Tensor Cores. This particular model is manufactured by Gigabyte and has a useful display for monitoring tempurature under heavy load.",
        img_url: "./resources/images/pc_components/i7_7820x.jpg"
    },
    Motherboard: {
        name: "MSI X299 Gaming Pro Carbon AC",
        description1: "The Motherboard is the main circuit board in a computer that connects all other components, allowing them to communicate and distribute power.",
        description2: "This motherboard, manufactured by MSI, contains the Intel X299 chipset, an integrated circuit system specially designed to accomodate the i7 7820x CPU and other similar CPU models.",
        img_url: "./resources/images/pc_components/x299_mobo.jpg"
    },
    RAM: {
        name: "G.Skill TridentZ 32GB DDR4-3200",
        description1: "Random Access Memory (RAM) is a computer's short-term memory storage. Data stored on RAM can be accessed almost instantly by applications and programs that are currently in use.",
        description2: "This PC contains 4 RAM modules and each offers 8 GB of memory, totaling 32 GB of available RAM.",
        img_url: "./resources/images/pc_components/TridentZ_ddr4.jpg"
    },
    AIO: {
        name: "NZXT Kraken X52",
        description1: "To dissipate heat from the CPU, a cooling solution makes contact with the CPU's integrated heat spreader (IHS). The complexity of that cooler can vary widely depending on the use case. Very demanding systems might make use of custom-built liquid coolant loops that transfer heat from components to a radiator via a pump.",
        description2: "This PC makes use of an all-in-one (AIO) liquid cooler. This is a middle-ground solution that combines components of a liquid cooling loop into a more convenient, more affordable form factor.",
        img_url: "./resources/images/pc_components/Kraken_x52.jpg"
    },
    PSU: {
        name: "Seasonic GX-750",
        description1: "The Power Supply Unit (PSU) converts high voltage alternating current (AC) from an outlet into direct current (DC), regulates that current, and distributes it to system components. Under heavy computing loads, a PC can consume a lot of power.",
        description2: "This power supply is rated to supply up to 750 watts under 100% load.",
        img_url: "./resources/images/pc_components/Focus_750W.jpg"
    },
    Fans: {
        name: "Corsair HD120",
        description1: "Fans are distributed around the PC chassis to create air flow and cool down components by removing hot air. Some fans are oriented to intake cool air from the room and others exhaust hot air from the system.",
        description2: "This PC uses eight 120mm case fans. The five fans on the right-hand side (two of which are not lit up like the others) intake air and the three fans on the top and left-hand side exhaust air.",
        img_url: "./resources/images/pc_components/HD120.jpg"
    }
}

/*
console.log(components)
*/