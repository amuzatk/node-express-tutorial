const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json())
app.use(cors())

const TodoSchema = new mongoose.Schema({
  text: {type: String, require: true},
  completed: {type: Boolean, default: false}
}, {timestamps:true})

const Todos = mongoose.model("Todos", TodoSchema);

mongoose.connect(process.env.MONGO_URI);

app.post("/api/v1/todo", async(req,res)=>{
  try {
    const newTodo = await Todos.create(req.body);
    res.status(201).json({msg:"Todo Created", data:newTodo});
  } catch (error) {
    res.status(500).json("Failed to create todo");
  }
})

app.get("/api/v1/todos", async(req,res)=>{
  try {
    const allTodos = await Todos.find({});
    res.status(200).json({msg:"Todos Fetched Successfully", data:allTodos});
  } catch (error) {
    res.status(500).json("Failed to fetch todos");
  }
});

const port = process.env.PORT || 3000
app.listen(port, ()=>{
  console.log(`Server is listeniing on port ${port}...`)
})




// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");

// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI);

// // Define To-Do Schema
// const TodoSchema = new mongoose.Schema({
//   text: String,
//   completed: Boolean,
// });

// const Todo = mongoose.model("Todo", TodoSchema);

// // Create a To-Do
// app.post("/api/todos", async (req, res) => {
//   try {
//     const { text } = req.body;
//     const newTodo = new Todo({ text, completed: false });
//     await newTodo.save();
//     res.status(201).json(newTodo);
//   } catch (error) {
//     res.status(500).json({ message: "Error creating To-Do" });
//   }
// });

// // Fetch all To-Dos
// app.get("/api/todos", async (req, res) => {
//   try {
//     const todos = await Todo.find({});
//     res.json(todos);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching To-Dos" });
//   }
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





////
// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config();

// const app = express();
// app.use(express.json());

// // Connect to MongoDB (Replace with your MongoDB URI)
// mongoose.connect(process.env.MONGO_URI);

// // User Schema
// const UserSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
// });

// const User = mongoose.model("User", UserSchema);

// // Registration Route
// app.post("/api/register", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // Check if user already exists
//     let user = await User.findOne({ email });
//     if (user) return res.status(400).json({ message: "User already exists" });

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create new user
//     user = new User({ name, email, password: hashedPassword });
//     await user.save();

//     // Generate JWT Token
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     res.status(201).json({msg:"Token Created" , token });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}===`));









////
// require('dotenv').config();
// require('express-async-errors');

// const express = require('express');
// const app = express();

// const mainRouter = require('./routes/main');
// const notFoundMiddleware = require('./middleware/not-found');
// const errorHandlerMiddleware = require('./middleware/error-handler');

// // middleware
// app.use(express.static('./public'));
// app.use(express.json());

// app.use("/api/v1", mainRouter);

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
