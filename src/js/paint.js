// The window object that tracks the display
let displayWindow = null;

/**
 * Whether paint mode is currently active
 * @returns {boolean} True if paint mode is active, false otherwise
 */
function isPainting() {
    return displayWindow !== null;
}

/**
 * Starts the paint mode by opening the display window
 */
function startPaint() {
    displayWindow = window.open("display.html", "Display", "width=512,height=512");

    // Exit paint mode if the user manually closes the window
    const checkInterval = setInterval(() => {
        if (!displayWindow || displayWindow.closed) {
            clearInterval(checkInterval); // Stop checking once closed
            displayWindow = null;
        }
    }, 1000);
}

/**
 * Sends a paint command to the display window
 * @param key The property of the cursor to modify
 * @param delta The degree of change of that property
 */
function sendPaintCommand(key, delta) {
    const dataToSend = { key: key, delta: delta };
    displayWindow.postMessage(dataToSend);
}

/**
 * Submits a paint command to be processed
 * @param cmd {string} The paint command
 * @returns {string} The output of the paint command
 */
function submitPaintCommand(cmd) {
    if (cmd === "") return "";

    switch (cmd) {
        case "w":
            sendPaintCommand("y", -2);
            break;
        case "a":
            sendPaintCommand("x", -2);
            break;
        case "s":
            sendPaintCommand("y", 2);
            break;
        case "d":
            sendPaintCommand("x", 2);
            break;
        case "t":
            sendPaintCommand("erase", 1);
            break;
        case "+":
            sendPaintCommand("width", 2);
            sendPaintCommand("height", 2);
            break;
        case "-":
            sendPaintCommand("width", -2);
            sendPaintCommand("height", -2);
            break;
        case "R":
            sendPaintCommand("red", 4);
            break;
        case "r":
            sendPaintCommand("red", -4);
            break;
        case "G":
            sendPaintCommand("green", 4);
            break;
        case "g":
            sendPaintCommand("green", -4);
            break;
        case "B":
            sendPaintCommand("blue", 4);
            break;
        case "b":
            sendPaintCommand("blue", -4);
            break;
        case "x":
            displayWindow.close();
            displayWindow = null;
            break;
        default:
            return "Error: Invalid paint command";
    }

    return "";
}

export { isPainting, submitPaintCommand, startPaint };
