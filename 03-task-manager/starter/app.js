// console.log('Task Manager App');

const express = require("express");
const tasks = require("./routess/tasks");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./midlleware/notFound");
const errorHandlerMiddleware = require("./midlleware/errorHandlerMiddleware");

app.use(express.static("./public"))
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

app.get("/", (req,res)=>{
    res.send("New Projuct")
})

const port = process.env.PORT || 3000;
const start = async()=>{
    try {
      await connectDB(process.env.MONGO_URI);
    //   console.log(process.env.MONGO_URI)
      app.listen(port, ()=>{
          console.log(`server listening on port ${port}...`)
      })
    } catch (error) {
        console.log(error)
    }
};

start();