const express = require("express");
const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import cors from "cors";

const app = express();
app.use(cors())

app.use(express.urlencoded({ extended: true }));

const secretKey = "123456lkj";

const createToken = (user) => {
  return jwt.sign({ user }, secretKey, { expiresIn: "1m" });
};

const verifytoken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.send("Login or register first");
  }
  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.send(error);
  }
};

const connection = mongoose
  .connect("mongodb://127.0.0.1:27017/Portfolio_messages", {
  })
  .then(() => console.log("DB connection established"))
  .catch((err) => console.log("error", err));

const feedbackSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

app.post("/api/feedback", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // const existHotel = await Hotel.findOne({ email: email });
    // if (existHotel) {
    //   return res.send("Account already exists. Please login.");
    // }
    // const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await Feedback.create({
      name,
      email,
      message,
    });

    const token = createToken(newUser);
    res.send("Succesfully Submit your message");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating hotel account.");
  }
});

// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await Hotel.findOne({ email: email });
//     if (!user) {
//       return res.send("Account does not exist. Please register.");
//     }
//     const comparePassword = await bcrypt.compare(password, user.password);
//     if (!comparePassword) {
//       return res.send("Password incorrect. Please recheck.");
//     }
//     const token = createToken(user);
//     res.send(token);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Error logging in.");
//   }
// });

// app.get("/", async (req, res) => {
//   try {
//     const users = await Hotel.find({});
//     res.send(users);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Error fetching users.");
//   }
// });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
