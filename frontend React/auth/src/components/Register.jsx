import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Resgister() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const navigate = useNavigate();

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
          console.log("registered", response.data);
          toLogin();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const toLogin = () => {
    navigate("/login");
  };

  return (
    <div className="d-flex flex-column container-sm mb-5 mt-5 w-50 bg-light p-4">
      <div className="d-flex flex-column container-sm mb-5 mt-5 w-50">
        <h1>Register</h1>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <input
          className="form-control mb-3"
          type="password"
          placeholder="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <input
          className="form-control mb-3"
          type="text"
          placeholder="username"
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
        <button onClick={register} className="btn btn-primary">
          Register
        </button>
        <strong className="register-login-text" onClick={toLogin}>
          Already have account?
        </strong>
      </div>
    </div>
  );
}

export default Resgister;
