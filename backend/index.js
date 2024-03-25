const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();
const mongoURI = process.env.MONGODB_URI;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = process.env.PORT || 3000; 

const secretKey = process.env.SECRET_KEY;

const createToken = (user) => {
  return jwt.sign({ user }, secretKey, { expiresIn: "1m" });
};
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send("Login or register first");
  }
  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(403).send("Invalid or expired token");
  }
};
console.log("MongoDB URI:", mongoURI);


const connection = mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection established"))
  .catch((err) => console.log("Error connecting to DB:", err));

const feedbackSchema = new mongoose.Schema(
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
    const newUser = await Feedback.create({
      name,
      email,
      message,
    });

    const token = createToken(newUser);
    res.status(201).json({ token });
  } catch (err) {
    console.error("Error creating feedback:", err);
    res.status(500).send("Error creating feedback");
  }
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
