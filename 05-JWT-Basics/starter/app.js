// const express = require("express");
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const cors = require("cors");
// const dotenv = require("dotenv");
// // require("dotenv").config();
// dotenv.config();

// const app = express();

// app.use(express.json());
// app.use(cors);

// //DB connection
// mongoose.connect(process.env.MONGO_URI);

// //Schema
// const todoSchema = new mongoose.Schema({
//   text: {type: String, require: true},
//   completed: {type: Boolean, default: false}
// })

// const Todos = mongoose.model("Todos", todoSchema);

// //routes
// // app.get("/", async(req,res)=>{
// //   return res.status(200).json("Hello World")
// // })
// app.post("/api/v1/todo", async(req,res)=>{
//   console.log(req.body,'todo created===')
//   try {
//   const newTodo = await Todos.create(req.body);
//   res.status(201).json({msg: "Todo Create", data: newTodo})
//   } catch (error) {
//     res.status(500).json("Failed to create todo")
//   }
// })

// app.get("/api/v1/todos", async(req,res)=>{
//   try {
//   const allTodos = await Todos.find({});
//   res.status(200).json({msg:"Fetched Todos Successfully", data: allTodos})
//   } catch (error) {
//     res.status(500).json("Failed to create todos")
//   }
// })


// const port = process.env.PORT || 5000
// app.listen(port, ()=>{
//   console.log(`Server is listening on ${port}...`)
// })



require('dotenv').config();
require('express-async-errors');

const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();

// const notFoundMiddleware = require('./middleware/not-found');
// const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware
// app.use(express.static('./public'));
app.use(express.json());

// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);

// const todoSchema = new mongoose.Schema({
//   text: String,
//   completed: Boolean
// });
const todoSchema = new mongoose.Schema({
  text: {type: String, require: true},
  completed: {type: Boolean, default: false}
})
const Todos = mongoose.model("Todos", todoSchema);

mongoose.connect(process.env.MONGO_URI);

app.get("/api/v1/todos", async(req,res)=>{
  try {
    const allTodos = await Todos.find({})
    res.status(200).json({msg:"Fetched Successfully", data:allTodos})
  } catch (error) {
    res.status(500).json("Internal Server Error")
  }
})

app.post("/api/v1/todo", async(req,res)=>{
  console.log(req.body,'====')
  try {
  const newTodo = await Todos.create(req.body);
  res.status(201).json({msg:"Todo Created", data:newTodo})
  } catch (error) {
    res.status(500).json("Internal Server Error")
  }
})

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();





// require('dotenv').config();
// require('express-async-errors');

// const express = require('express');
// const app = express();

// const notFoundMiddleware = require('./middleware/not-found');
// const errorHandlerMiddleware = require('./middleware/error-handler');

// // middleware
// app.use(express.static('./public'));
// app.use(express.json());

// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);

// const port = process.env.PORT || 3000;

// const start = async () => {
//   try {
//     app.listen(port, () =>
//       console.log(`Server is listening on port ${port}...`)
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();
