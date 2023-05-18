const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 3000;


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(PORT, () => {
  console.log(`App started on port: ${PORT}`);
});

const {
  registerUser,
  loginUser,
  getAllUsers,
} = require("./controller/userController");

//routes

app.get("/users", getAllUsers);

app.post("/user/register", registerUser);

app.post("/login", loginUser);
