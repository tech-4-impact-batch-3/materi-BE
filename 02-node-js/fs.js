// readline
const fs = require("fs");

fs.readFile("process.js", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

fs.truncate(".env", 2, () => {
  console.log("success");
});
