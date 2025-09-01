// The bitmapped canvas object
const displayCanvas = document.getElementById("display");

// Whether erase mode is active
let erase = false;

// The cursor object
let cursor = {};

/**
 * Draws a point on the canvas based on the state of the cursor
 */
function draw() {
    const ctx = displayCanvas.getContext("2d");

    if (erase) ctx.fillStyle = `rgb(0, 0, 0)`;
    else ctx.fillStyle = `rgb(${cursor.red}, ${cursor.green}, ${cursor.blue})`;

    ctx.fillRect(cursor.x, cursor.y, cursor.width, cursor.height);
}

/**
 * Normalizes the cursor properties to be within valid ranges
 */
function normalize() {
    if (cursor.x < 0) cursor.x = displayCanvas.width;
    if (cursor.x > displayCanvas.width) cursor.x = 0;
    if (cursor.y < 0) cursor.y = displayCanvas.height;
    if (cursor.y > displayCanvas.height) cursor.y = 0;

    if (cursor.width <= 0) cursor.width = 2;
    if (cursor.height <= 0) cursor.height = 2;

    if (cursor.red < 0) cursor.red = 0;
    if (cursor.red > 255) cursor.red = 255;
    if (cursor.green < 0) cursor.green = 0;
    if (cursor.green > 255) cursor.green = 255;
    if (cursor.blue < 0) cursor.blue = 0;
    if (cursor.blue > 255) cursor.blue = 255;
}

/**
 * Resets the canvas to its initial state
 */
function clear() {
    const ctx = displayCanvas.getContext("2d");
    ctx.fillStyle = `rgb(0, 0, 0)`;
    ctx.fillRect(0, 0, displayCanvas.width, displayCanvas.height);

    // Reset the cursor
    cursor = {
        // Position
        x: displayCanvas.width / 2,
        y: displayCanvas.height / 2,

        // Size
        width: 2,
        height: 2,

        // Color
        red: 255,
        green: 0,
        blue: 0
    };
}

// Draw on message
window.addEventListener("message", (event) => {
    const receivedData = event.data;

    if (receivedData.key === "erase") erase = !erase;
    else cursor[receivedData.key] += receivedData.delta;

    normalize();
    draw();
});

// Draw initial point
clear();
draw();
