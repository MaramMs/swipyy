import { Routes, Route } from "react-router-dom";
import { SignUp,SignIn, Verification,ChangePassword,Home } from "./pages";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [user, setUser] = useState({
    login_input: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  return (
    <div className="App">
        <Routes>
         <Route path="/" element={<Home />}  />
        <Route path="/signup" element={<SignUp />} />
        <Route  path="/signin" element={<SignIn  handleChange={handleChange} user={user} setUser={setUser}/>} />
        <Route path="/verification" element={<Verification user={user}/>} />
        <Route path="/change-password" element={<ChangePassword  user={user} setUser={setUser}/>} />
      </Routes>
    </div>
  );
}

export default App;
