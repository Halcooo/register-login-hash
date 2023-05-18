
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");


  const login = (e) => {
    const user = {
      email, password
    }
    console.log(user);
    e.preventDefault();
    axios.post('http://localhost:3000/login',
      user
    )
      .then((response) => {
        if (response) {
          console.log('loggedIN', response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });


  }



  return (
    <div>
      <input type="text" placeholder="email" onChange={(e) => { setemail(e.target.value) }} />
      <input type="password" placeholder="password" onChange={(e) => { setpassword(e.target.value) }} />
      <button onClick={login}>login</button>
    </div>
  );
}

export default App;
