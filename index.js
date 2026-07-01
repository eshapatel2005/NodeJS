//import fs from 'fs';

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
// const fs=require('fs');
// fs.readFile("demo.txt", (err, data) => {
//     if (err) throw err;

//     console.log(data);
// });

// console.log("Program End");

//Append data to a file
// const fs = require("fs");
// fs.appendFile("demo.txt", "\nWelcome!", (err) => {
//   if (err) throw err;

//   console.log("Data added");
// });

//Rename a file 
// const fs=require('fs');
// fs.rename("demo.txt","demo1.txt",(err)=>{
//     if(err) throw err;
//     console.log("File renamed successfully");
// });

//Create a folder
// const fs = require("fs");
// fs.mkdir("MyFolder", (err) => {
//     if (err) throw err;
//     console.log("Folder created");
// });

//Delete a folder 
// const fs=require('fs');
// fs.rmdir("MyFolder",(err)=>{
//     if (err) throw err;
//     console.log("Folder deleted successfully");
// })

//Check if a file exits
const fs=require('fs');
if(fs.existsSync("demo1.txt")){
    console.log("File exists");
}else{
    console.log("File not found");
}