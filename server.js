//1 import express
const express = require("express");
const auth = require("./middleware/auth");

//2 instance methode express
const app = express();

app.use(express.json());
//  awel fichier => server.js ( request (path+ method))
//  middleware for the route router
// middleware global
// app.use(auth);
app.use("/users", require("./router/user"));

// ---------------------------------------------------------------
//3 port
const PORT = 5000;
//4 lancement server
app.listen(PORT, () => console.log(`server is running on ${PORT}!!`));
