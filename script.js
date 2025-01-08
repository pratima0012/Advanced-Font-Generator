// Get HTML elements
const fontSelector = document.getElementById("font-selector");
const fontSizeInput = document.getElementById("font-size");
const textShadowColorInput = document.getElementById("text-shadow-color");
const textShadowXInput = document.getElementById("text-shadow-x");
const textShadowYInput = document.getElementById("text-shadow-y");
const textShadowBlurInput = document.getElementById("text-shadow-blur");
const lineHeightInput = document.getElementById("line-height");
const letterSpacingInput = document.getElementById("letter-spacing");
const textTransformInput = document.getElementById("text-transform");
const textAlignInput = document.getElementById("text-align");
const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const resetButton = document.getElementById("reset-button");
//extra work 
document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.getElementById('save-btn');
    const textInput = document.getElementById('text');
    const colorInput = document.getElementById('color');
    const outputText = document.getElementById('output-text');

    // Load saved data from local storage if any
    if (localStorage.getItem('savedText')) {
        textInput.value = localStorage.getItem('savedText');
        outputText.textContent = localStorage.getItem('savedText');
    }

    if (localStorage.getItem('savedColor')) {
        colorInput.value = localStorage.getItem('savedColor');
        outputText.style.color = localStorage.getItem('savedColor');
    }

    

    // Save the data when the button is clicked
    saveButton.addEventListener('click', function() {
        const text = textInput.value;
        const color = colorInput.value;

        // Save data to localStorage
        localStorage.setItem('savedText', text);
        localStorage.setItem('savedColor', color);

        // Update output text
        outputText.textContent = text;
        outputText.style.color = color;

        alert('Data Saved!');
    });
});


// Function to apply changes to the output text
function applyStyles() {
    const selectedFont = fontSelector.value;
    const fontSize = fontSizeInput.value + "px";
    const textShadowColor = textShadowColorInput.value;
    const textShadowX = textShadowXInput.value + "px";
    const textShadowY = textShadowYInput.value + "px";
    const textShadowBlur = textShadowBlurInput.value + "px";
    const lineHeight = lineHeightInput.value;
    const letterSpacing = letterSpacingInput.value + "px";
    const textTransform = textTransformInput.value;
    const textAlign = textAlignInput.value;

    // Apply all styles to the output text
    outputText.style.fontFamily = selectedFont;
    outputText.style.fontSize = fontSize;
    outputText.style.lineHeight = lineHeight;
    outputText.style.letterSpacing = letterSpacing;
    outputText.style.textTransform = textTransform;
    outputText.style.textAlign = textAlign;
    outputText.style.textShadow = `${textShadowX} ${textShadowY} ${textShadowBlur} ${textShadowColor}`;

    // Update the output text with the input text or default if empty
    outputText.textContent = inputText.value || "The quick brown fox jumps over the lazy dog.";
}

// Reset all styles to default
function resetStyles() {
    fontSelector.value = "Arial";
    fontSizeInput.value = "16";
    textShadowColorInput.value = "#888888";
    textShadowXInput.value = "2";
    textShadowYInput.value = "2";
    textShadowBlurInput.value = "4";
    lineHeightInput.value = "1.5";
    letterSpacingInput.value = "0";
    textTransformInput.value = "none";
    textAlignInput.value = "left";
    inputText.value = "";

    applyStyles();
}

// Event listeners for each input
fontSelector.addEventListener("change", applyStyles);
fontSizeInput.addEventListener("input", applyStyles);
textShadowColorInput.addEventListener("input", applyStyles);
textShadowXInput.addEventListener("input", applyStyles);
textShadowYInput.addEventListener("input", applyStyles);
textShadowBlurInput.addEventListener("input", applyStyles);
lineHeightInput.addEventListener("input", applyStyles);
letterSpacingInput.addEventListener("input", applyStyles);
textTransformInput.addEventListener("change", applyStyles);
textAlignInput.addEventListener("change", applyStyles);
inputText.addEventListener("input", applyStyles);

// Reset button functionality
resetButton.addEventListener("click", resetStyles);

// Initial application of styles when the page loads
applyStyles();
