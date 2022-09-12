const express = require("express");
const app = express();
// Your code here
// part 1
// app.use(express.static(`${__dirname}/assets/scripts`));
// part 2
// app.use("/scripts", express.static(`assets/scripts`));
// part 3
app.use("/stylesheets", express.static(`${__dirname}/assets/css`));
const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
