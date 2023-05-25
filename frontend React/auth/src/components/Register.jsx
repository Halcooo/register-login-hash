import React from "react";
import axios from "axios";
import { useState } from "react";

function Resgister() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [username, setusername] = useState("");
  const register = (e) => {
    const user = {
      email,
      password,
      username,
    };
    console.log(user);
    e.preventDefault();
    axios
      .post("http://localhost:3000/user/register", user)
      .then((response) => {
        if (response) {
          console.log("loggedIN", response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="d-flex flex-column container-sm mb-5 mt-5 w-50">
      <input
        type="text"
        placeholder="email"
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="username"
        onChange={(e) => {
          setusername(e.target.value);
        }}
      />
      <button onClick={register}>Register</button>
    </div>
  );
}

export default Resgister;
