const connection = require("../database/connection");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const getUsers = () => {
  return new Promise((resolve, reject) => {
    const querry = "SELECT * from user ";
    connection.query(querry, (err, result) => {
      if (err) return reject(err);
      resolve(result);
      console.log(result);
    });
  });
};

const getUser = (username) => {
  return new Promise((resolve, reject) => {
    const querry = "SELECT * from user WHERE username = ? ";
    connection.query(querry, [username], (err, result) => {
      if (err) return reject(err);
      resolve(result);
      console.log(result);
    });
  });
};

const register = (user) => {
  let { username, email, password } = user;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    const querryUser = `INSERT INTO user (username,password,email)
        VALUES (?,?,?)`;
    return new Promise((resolve, reject) => {
      connection.query(querryUser, [username, hash, email], (err, result) => {
        if (err) return reject(err);
        resolve(result.insertId);
      });
    });
  });
};

const login = (user) => {
  return new Promise(async (resolve, reject) => {
    const { email, password } = user;
    const querryUser = `SELECT user.username,user.id,user.email,user.password
   FROM user  where email = ? `;
    connection.query(querryUser, [email], (err, res) => {
      if (err) return reject(err);
      if (res) {
        bcrypt.compare(password, res[0].password, (err, isValid) => {
          console.log(isValid);
          resolve(res[0]);
        });
      }
    });
  });
};

module.exports = {
  login,
  register,
  getUsers,
  getUser,
};
