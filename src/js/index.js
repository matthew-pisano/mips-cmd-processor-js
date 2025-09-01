import { currentPrompt, submitCommand } from "./cmd.js";
import { isPainting } from "./paint.js";

const terminal = document.getElementById("terminal");
const terminalInput = document.getElementById("terminalInput");
const terminalOutput = document.getElementById("terminalOutput");
const terminalPrompt = document.getElementById("terminalPrompt");

/**
 * Submits the command in the terminal input
 */
function submit() {
    let text = terminalInput.innerText.trim();

    let commandDiv = document.createElement("div");
    commandDiv.className = "terminal-command";
    commandDiv.innerText = `${currentPrompt} ${text}`;

    let outputDiv = document.createElement("div");
    outputDiv.className = "terminal-output";
    let rawOutput = submitCommand(text);
    rawOutput = rawOutput.replace(/ /g, "&nbsp;").replaceAll(/\n/g, "<br>");
    outputDiv.innerHTML = rawOutput;

    // Do not echo if painting
    if (!isPainting()) terminalOutput.appendChild(commandDiv);
    // Only show error messages when painting
    if (rawOutput !== "") terminalOutput.appendChild(outputDiv);

    // Scroll to the bottom of the terminal output
    terminalOutput.scrollTop = terminalOutput.scrollHeight;

    // Clear the input after submission
    terminalInput.innerText = "";

    terminalPrompt.innerText = currentPrompt;
}

// Callback for changes within the contenteditable div
terminalInput.addEventListener("input", function (event) {
    // If the key is return
    if (event.inputType === "insertParagraph") {
        event.preventDefault(); // Prevent the default action of adding a newline
        submit();
        terminalInput.innerText = ""; // Clear the input after submission
    }
});

// Focus input when clicking terminal
terminal.addEventListener("click", function () {
    terminalInput.focus();
});

// Focus input when clicking anywhere on the page
document.body.addEventListener("click", function (event) {
    event.preventDefault();
    terminalInput.focus();
});

// Initial focus on the input area
terminalInput.focus();
