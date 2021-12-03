const http = require("http");
const path = require("path");
const express = require("express");

const app = express();
app.use(express.static(path.join(__dirname, "./build")));

const server = new http.createServer(app);

server.on("error", (err) => console.log("Server error:", err));
server.listen(process.env.PORT || 3000);
