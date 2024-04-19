 //file handling through node.js

 //fs => file system is inbuilt package of node to handle files through program
 const fs = require("fs");


// write file
// Sync..
// fs.writeFileSync("text.txt", "Hello World!")


// async..
// fs.writeFile("test1.txt", "Rajeev", (err)=>{})

// reading files
//sync
// const readFile = fs.readFileSync("./text.txt", "utf-8")
// console.log(readFile);

// const readContact = fs.readFileSync("./test1.txt", "utf-8")
// console.log(readContact);

//Async
// fs.readFile('./test1.txt', 'utf-8', (error, result)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(result);
//     }
// })

// Copy file
// fs.copyFileSync('./test1.txt', 'copied.txt')

// append file
// fs.appendFileSync("./test1.txt", "\n hello Rajeev")

// appending inside the file
// fs.appendFileSync("./test1.txt", new Date().getTime().toLocaleString())

// Delete file
// fs.unlinkSync('./text.txt')

// for knowing the stats of the files
// console.log(fs.statSync("./test1.txt"));

// make new directory
// fs.mkdirSync("new folder")

// make new folder insider directory
// fs.mkdirSync('./new folder/a')
