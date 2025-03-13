
const express = require('express')
const app = express();
const people = require("./routess/people");
const auth = require("./routess/auth");

app.use(express.static("./methods-public"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use("/api/people", people);
app.use("/login", auth)
  
app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
