const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const Message = require("./model/message");

const app = express();
const port = process.env.PORT;

// dotenv  and database configuration
dotenv.config({ path: "./config.env" });
require("./db/connect");

// this method is used to get data from front end
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(5000, () => {
  console.log("server listening");
});

// Message
app.post("/message", async (req, res) => {
  try {
    // Get body or Data
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const sendMsg = new Message({
      name: name,
      email: email,
      message: message,
    });

    // Save Method is Used to Create User or Insert User
    // But Before Saving or Inserting, Password will Hash
    // Because of Hashing. After Hash, It will save to DB
    const created = await sendMsg.save();
    console.log(created);
    res.status(200).send("Sent");
  } catch (error) {
    res.status(400).send(error);
  }
});
