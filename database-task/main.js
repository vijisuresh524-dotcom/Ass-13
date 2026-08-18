const express = require("express");
require("dotenv").config();
const dbConnection = require("./config/post.config");
const routerConnection = require("./routers/post.router");

const app = express();
app.use(express.json());
app.use("/posts", routerConnection);
dbConnection();

app.listen(process.env.port, () =>{
    console.log(`Server is running on ${process.env.port}`);
});
