const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
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

app.get("/users", getAllUsers);

app.post("/user/register", registerUser);

app.post("/login", loginUser);
