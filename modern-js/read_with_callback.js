/* An illustration of asynchronous programming with JS. In this example, we 
 * perform an I/O operation in Node.js and use a callback function to display 
 * the file's contents as soon as the operation concludes
 */

const fs = require("fs");

// Define a callback function to use with the readFile method of fs
const callback = (err, data) => {
    /* Print the contents of a given file */
    if (err) 
        return console.log("error");

    console.log(`File content is ${data}`);
}

fs.readFile("file.txt", callback);

/* This was simply a demonstration of asynchronous programming in JS. However, 
 * we'll prefer to not use this way since callbacks can pile up and make the 
 * code harder to read and maintain which means errors. Instead, opt for 
 * promises and async/await. */