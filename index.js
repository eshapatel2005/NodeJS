 import fs from 'fs';

// console.log("Hello");

// //Addition of 2 numbers
// let a=5;
// let b=10;
// console.log("Addition : ",a+b); 


// //File System Module
// const fs=require('fs');


//Create a file
// const fs = require("fs");
// fs.writeFile("demo.txt", "Hello Node.js ...", (err) => {
//     if (err) throw err;

//     console.log("File created successfully");
// });


//Read a file 
fs.readFile("demo.txt", "utf8", (err, data) => {
    if (err) throw err;

    console.log(data);
});

console.log("Program End");