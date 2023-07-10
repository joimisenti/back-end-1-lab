// Using Node Package Manager, installed two packages express and cors using command:
// npm i express cors

// import the express package
const express = require("express");
// import the cors package
const cors = require("cors");

// create variable app to avoid lengthy code to initialize express commands
const app = express();

// configure our express server to use JSON objects correctly
app.use(express.json());

// allow our express server to use the cors package we required
app.use(cors());


app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
});

// add another endpoint and method that will tell us how the weather is today
// app.get("/weather/:temperature", (req, res) => {
//     const phrase = `<h3>It was ${req.params.temperature} today <h3>`;
//     res.status(200).send(phrase);
// })

// with object destructuring, we can make the above code a little easier to read
app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
});

// tell express to set our server up to run (or "listen") on port 4000
app.listen(4000, () => console.log("Server running on port 4000"));

// use nodemon command in terminal to get new server listening on port 4000
// in terminal, to check server is working correctly so far, use command:
// nodemon server/index

// create first endpoint and method to handle sending friends array back to the client (front end)
// above the listen, but below any middleware(app.use calls are middleware), create the GET endpoint and method