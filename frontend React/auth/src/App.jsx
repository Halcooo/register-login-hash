import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./components/Content";
import Login from "./components/Login";
import Register from "./components/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
