const helpString = `--Help Menu--
echo    Prints an inputted phrase to the screen
                arg1: The phrase to print
exit    Terminates the program
help    Displays command list and usages
paint   Draws on a bitmap display
                --Controls--
                w: Moves the brush up
                a: Moves the brush left
                s: Moves the brush down
                d: Moves the brush right
                t: Toggles between draw and erase
                +: Increases the brush size
                -: Decreases the brush size
                R: Increases the Redness of the brush
                r: Decreases the Redness of the brush
                G: Increases the Greenness of the brush
                g: Decreases the Greenness of the brush
                B: Increases the Blueness of the brush
                b: Decreases the Blueness of the brush
dechex  Converts the argument from decimal to hexadecimal
                arg1: The decimal number ot be converted
hexdec  Converts the argument from hexadecimal to decimal
                arg1: The hexadecimal number ot be converted
add     Adds the two decimal arguments
                arg1: The first addend
                arg2: The second addend
addh    Adds the two hexadecimal arguments
                arg1: The first addend
                arg2: The second addend
sub     Subtracts the two decimal arguments
                arg1: The minuend
                arg2: The subtrahend
subh    Subtracts the two hexadecimal arguments
                arg1: The minuend
                arg2: The subtrahend
mul     Multiplies the two decimal arguments
                arg1: The first factor
                arg2: The second factor
mulh    Multiplies the two hexadecimal arguments
                arg1: The first factor
                arg2: The second factor
div     Divides the two decimal arguments
                arg1: The dividend
                arg2: The divisor
divh    Divides the two hexadecimal arguments
                arg1: The dividend
                arg2: The divisor`;


// Ter terminal prompts
const defaultPrompt = ":/>";
const paintPrompt = ":/P>";
let currentPrompt = defaultPrompt;


/**
 * Displays the help menu
 * @param args {Array} The arguments passed to the command
 * @returns {string} The help menu or an error message
 */
function help(args) {
    if (args.length !== 0) return 'Error: help does not take any arguments';

    return helpString;
}


/**
 * Prints the inputted arguments to the screen
 * @param args {Array} The messages to be printed
 * @returns {string} The concatenated message
 */
function echo(args) {
    return args.join(' ')
}


/**
 * Terminates the program
 * @param args {Array} The arguments passed to the command
 * @returns {string} The termination message or an error message
 */
function exit(args) {
    if (args.length !== 0) return 'Error: exit does not take any arguments';

    // Delay the exit to allow the user to see the message
    let delayedExit = async (timeout) => {
        await new Promise(resolve => setTimeout(resolve, timeout));
        window.close();
    }
    delayedExit(2000);

    return 'Have a good day!\nTerminating...'
}


/**
 * Adds two decimal numbers
 * @param args {Array} The decimal numbers to be added
 * @returns {string} The result of the addition or an error message
 */
function addd(args) {
    if (args.length !== 2) return 'Error: add requires exactly 2 arguments';

    let num1 = parseFloat(args[0]);
    let num2 = parseFloat(args[1]);
    if (isNaN(num1) || isNaN(num2)) return 'Error: add requires numeric arguments';

    return `${num1} + ${num2} = ${(num1 + num2).toString()}`;
}


/**
 * Adds two hexadecimal numbers
 * @param args {Array} The hexadecimal numbers to be added
 * @returns {string} The result of the addition or an error message
 */
function addh(args) {
    if (args.length !== 2) return 'Error: addh requires exactly 2 arguments';

    let num1 = parseInt(args[0], 16);
    let num2 = parseInt(args[1], 16);
    if (isNaN(num1) || isNaN(num2)) return 'Error: addh requires hexadecimal arguments';

    return `${args[0]} + ${args[1]} = ${(num1 + num2).toString(16).toUpperCase()}`;
}


/**
 * Subtracts two decimal numbers
 * @param args {Array} The decimal numbers to be subtracted
 * @returns {string} The result of the subtraction or an error message
 */
function subd(args) {
    if (args.length !== 2) return 'Error: sub requires exactly 2 arguments';

    let num1 = parseFloat(args[0]);
    let num2 = parseFloat(args[1]);
    if (isNaN(num1) || isNaN(num2)) return 'Error: sub requires numeric arguments';

    return `${num1} - ${num2} = ${(num1 - num2).toString()}`;
}


/**
 * Subtracts two hexadecimal numbers
 * @param args {Array} The hexadecimal numbers to be subtracted
 * @returns {string} The result of the subtraction or an error message
 */
function subh(args) {
    if (args.length !== 2) return 'Error: subh requires exactly 2 arguments';

    let num1 = parseInt(args[0], 16);
    let num2 = parseInt(args[1], 16);
    if (isNaN(num1) || isNaN(num2)) return 'Error: subh requires hexadecimal arguments';

    return `${args[0]} - ${args[1]} = ${(num1 - num2).toString(16).toUpperCase()}`;
}

/**
 * Divides two decimal numbers
 * @param args {Array} The decimal numbers to be divided
 * @returns {string} The result of the division or an error message
 */
function divd(args) {
    if (args.length !== 2) return 'Error: div requires exactly 2 arguments';

    let num1 = parseFloat(args[0]);
    let num2 = parseFloat(args[1]);
    if (isNaN(num1) || isNaN(num2)) return 'Error: div requires numeric arguments';

    if (num2 === 0) return 'Error: Division by zero';
    return `${num1} / ${num2} = ${(num1 / num2).toString()}`;
}


/**
 * Divides two hexadecimal numbers
 * @param args {Array} The hexadecimal numbers to be divided
 * @returns {string} The result of the division or an error message
 */
function divh(args) {
    if (args.length !== 2) return 'Error: divh requires exactly 2 arguments';

    let num1 = parseInt(args[0], 16);
    let num2 = parseInt(args[1], 16);
    if (isNaN(num1) || isNaN(num2)) return 'Error: divh requires hexadecimal arguments';

    if (num2 === 0) return 'Error: Division by zero';
    return `${args[0]} / ${args[1]} = ${(num1 / num2).toString(16).toUpperCase()}`;
}


/**
 * Multiplies two decimal numbers
 * @param args {Array} The decimal numbers to be multiplied
 * @returns {string} The result of the multiplication or an error message
 */
function muld(args) {
    if (args.length !== 2) return 'Error: mul requires exactly 2 arguments';

    let num1 = parseFloat(args[0]);
    let num2 = parseFloat(args[1]);
    if (isNaN(num1) || isNaN(num2)) return 'Error: mul requires numeric arguments';

    return `${num1} * ${num2} = ${(num1 * num2).toString()}`;
}


/**
 * Multiplies two hexadecimal numbers
 * @param args {Array} The hexadecimal numbers to be multiplied
 * @returns {string} The result of the multiplication or an error message
 */
function mulh(args) {
    if (args.length !== 2) return 'Error: mulh requires exactly 2 arguments';

    let num1 = parseInt(args[0], 16);
    let num2 = parseInt(args[1], 16);
    if (isNaN(num1) || isNaN(num2)) return 'Error: mulh requires hexadecimal arguments';

    return `${args[0]} * ${args[1]} = ${(num1 * num2).toString(16).toUpperCase()}`;
}


/**
 * Converts a decimal number to hexadecimal
 * @param args {Array} The decimal number to be converted
 * @returns {string} The result of the conversion or an error message
 */
function dechex(args) {
    if (args.length !== 1) return 'Error: dechex requires exactly 1 argument';

    let num = parseFloat(args[0]);
    if (isNaN(num)) return 'Error: dechex requires a decimalc argument';

    return `${num} in decimal is ${Math.floor(num).toString(16)} in hexadecimal`;
}


/**
 * Converts a hexadecimal number to decimal
 * @param args {Array} The hexadecimal number to be converted
 * @returns {string} The result of the conversion or an error message
 */
function hexdec(args) {
    if (args.length !== 1) return 'Error: hexdec requires exactly 1 argument';

    let num = parseInt(args[0], 16);
    if (isNaN(num)) return 'Error: hexdec requires a hexadecimal argument';

    return `${args[0]} in hexadecimal is ${num.toString()} in decimal`;
}


/**
 * Paints on the bitmapped display
 * @param args {Array} The arguments for painting
 */
function paint(args) {
    if (args.length !== 0) return 'Error: paint does not take any arguments';

    currentPrompt = paintPrompt;
    startPaint();
    return '--Paint--\nOpen Bitmap Display\nStarting Paint...(Enter x To Exit)';
}


/**
 * Submits a command to be processed
 * @param rawCommand {string} The raw command string
 * @returns {string} The output of the command
 */
function submitCommand(rawCommand) {

    if (isPainting()) return submitPaintCommand(rawCommand);
    else currentPrompt = defaultPrompt;

    if (rawCommand === '') return '';

    // Token parsing on the command
    let tokens = rawCommand.split(' ');
    let command = tokens[0];
    let args = tokens.slice(1);

    switch (command) {
        case 'help':
            return help(args);
        case 'echo':
            return echo(args);
        case 'exit':
            return exit(args);
        case 'add':
            return addd(args);
        case 'addh':
            return addh(args);
        case 'sub':
            return subd(args);
        case 'subh':
            return subh(args);
        case 'div':
            return divd(args);
        case 'divh':
            return divh(args);
        case 'mul':
            return muld(args);
        case 'mulh':
            return mulh(args);
        case 'dechex':
            return dechex(args);
        case 'hexdec':
            return hexdec(args);
        case 'paint':
            return paint(args);
        default:
            return `Command not recognized: ${command}`;
    }
}