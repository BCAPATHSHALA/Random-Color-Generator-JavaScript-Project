// Starting: Random Color Generator Using RGB
const rgbStop = document.querySelector("#rgbStop");
const rgbStart = document.querySelector("#rgbStart");
const rgbCopy = document.querySelector("#rgbCopy");
const rgbColorDisplay = document.querySelector("#rgbColorDisplay");
let rgbSpan = document.getElementById("rgbSpan");

// Initialization of RGB with zero
let [red, green, blue] = [0, 0, 0];
let rgb = `rgb(${red}, ${green}, ${blue})`;
let currentIntervalId = null;

// Create function to generate the random color
const randomRGBColor = () => {
  const min = 0;
  const max = 255;
  red = Math.floor(Math.random() * (max - min + 1)) + min;
  green = Math.floor(Math.random() * (max - min + 1)) + min;
  blue = Math.floor(Math.random() * (max - min + 1)) + min;
  rgb = `rgb(${red}, ${green}, ${blue})`;
  //   console.log(rgb);
  rgbColorDisplay.textContent = rgb;
  rgbSpan.style.backgroundColor = rgb;
};

//! Start (Generate the Random RGB Colors)
const generateRGB = () => {
  if (currentIntervalId !== null) {
    clearInterval(currentIntervalId);
  }
  currentIntervalId = setInterval(randomRGBColor, 1000);
};

rgbStart.addEventListener("click", generateRGB);

//! Stop to Generate the Random RGB Colors
const stopGenerateRGB = () => {
  clearInterval(currentIntervalId);
};

rgbStop.addEventListener("click", stopGenerateRGB);

//! Copy RGB Generated Color using clipboard After Stoping
const copyRGBColor = async () => {
  try {
    // Paragraph Content copied to clipboard
    await navigator.clipboard.writeText(rgbColorDisplay.innerHTML);

    // Change Text Content of Copy Button
    rgbCopy.textContent = "Copied";
    setTimeout(() => {
      rgbCopy.textContent = "Copy";
    }, 5000);
  } catch (err) {
    // Show Error into Paragraph
    rgbColorDisplay.textContent = `Failed to copy: ${err}`;
    setTimeout(() => {
      rgbColorDisplay.textContent = rgb;
    }, 5000);
  }
};

rgbCopy.addEventListener("click", copyRGBColor);

// Starting: Random Color Generator Using HEX
const hexStop = document.querySelector("#hexStop");
const hexStart = document.querySelector("#hexStart");
const hexCopy = document.querySelector("#hexCopy");
const hexColorDisplay = document.querySelector("#hexColorDisplay");
let hexSpan = document.getElementById("hexSpan");

// Initialization of RGB with zero
const hexValueStore = "0123456789ABCDEF";
let hexColor = "#232323";
let currentIntervalId1 = null;

// Create function to generate the random color
const randomHexColor = () => {
  const minIndex = 0;
  const maxIndex = 15;
  hexColor = "#";
  for (let i = 0; i <= 5; i++) {
    let index =
      Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
    let hexChar = hexValueStore[index];
    hexColor += hexChar;
  }
  // console.log(hexColor);
  hexColorDisplay.textContent = hexColor;
  hexSpan.style.backgroundColor = hexColor;
};

//! Start (Generate the Random HEX Colors)
const generateHEX = () => {
  if (currentIntervalId1 !== null) {
    clearInterval(currentIntervalId1);
  }
  currentIntervalId1 = setInterval(randomHexColor, 1000);
};

hexStart.addEventListener("click", generateHEX);

//! Stop to Generate the Random HEX Colors
const stopGenerateHEX = () => {
  clearInterval(currentIntervalId1);
};

hexStop.addEventListener("click", stopGenerateHEX);

//! Copy HEX Generated Color using clipboard After Stoping
const copyHEXColor = async () => {
  try {
    // Paragraph Content copied to clipboard
    await navigator.clipboard.writeText(hexColorDisplay.innerHTML);

    // Change Text Content of Copy Button
    hexCopy.textContent = "Copied";
    setTimeout(() => {
      hexCopy.textContent = "Copy";
    }, 5000);
  } catch (err) {
    // Show Error into Paragraph
    hexColorDisplay.textContent = `Failed to copy: ${err}`;
    setTimeout(() => {
      hexColorDisplay.textContent = hexColor;
    }, 5000);
  }
};

hexCopy.addEventListener("click", copyHEXColor);
