import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const toContent = () => navigate("/");
  const toRegister = () => navigate("/register");

  const login = (e) => {
    const user = {
      email,
      password,
    };
    console.log(user);
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", user)
      .then((response) => {
        if (response) {
          localStorage.setItem("loggedUser", JSON.stringify(response.data));
          console.log("logged in ", response.data);
          toContent();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="d-flex flex-column container-sm mb-5 mt-5 w-50">
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
      <button onClick={login} className="btn btn-primary">
        Login
      </button>
      <strong onClick={toRegister} className="register-login-text">
        Register now!
      </strong>
    </div>
  );
}

export default Login;
