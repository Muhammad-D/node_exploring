const path = require("path");
const fs = require("fs");

// fs.mkdir(path.join(__dirname, "test"), { recursive: false }, (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log(">>>>>>>It is OK");
// });

const filePath = path.join(__dirname, "test", "here.html");

// fs.writeFile(filePath, "This what you looking for", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log(">>>>>>>FIRST");
// });
// fs.writeFile(filePath, "This how it is from now on", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log(">>>>>>>SECOND");
// });

// fs.appendFile(filePath, "\nAppended text", (er) => {
//   if (er) throw er;
//   console.log(">>>>>>>THIRD");
// });

fs.readFile(filePath, "utf-8", (err, content) => {
  if (err) throw err;
  console.log(content);
});
