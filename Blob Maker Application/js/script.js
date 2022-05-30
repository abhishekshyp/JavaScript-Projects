// DOM Elements
let outputCode = document.getElementById("css-code");
let sliders = document.querySelectorAll("input[type='range']");
let inputs = document.querySelectorAll("input[type='number']");

// Change in Slider Value
sliders.forEach(function(slider) {
    slider.addEventListener("input", createBlob);
});

// Change in Input Value
inputs.forEach(function(inp) {
    inp.addEventListener("change", createBlob);
});


function createBlob() {
    let radiusOne = sliders[0].value;
    let radiusTwo = sliders[1].value;
    let radiusThree = sliders[2].value;
    let radiusFour = sliders[3].value;

    let blobHeight = inputs[0].value;
    let blobWidth = inputs[1].value;

    let borderRadius = `${radiusOne}% ${100 - radiusOne}% ${100 - radiusFour}% ${radiusFour}% / ${radiusThree}% ${radiusTwo}% ${100 - radiusTwo}% ${100 - radiusThree}%`;

    document.getElementById("blob").style.cssText = `border-radius: ${borderRadius}; height: ${blobHeight}px; width: ${blobWidth}px`;

    outputCode.value = `border-radius: ${borderRadius};`
}

document.getElementById("copy").addEventListener("click", function(){
    outputCode.select();
    document.execCommand('copy');
    alert('Code Copied');
});

createBlob();