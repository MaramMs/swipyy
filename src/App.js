import { Routes, Route } from "react-router-dom";
import { SignUp,SignIn, Verification,Home } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
        <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/verification" element={<Verification />} />
      </Routes>
    </div>
  );
}

export default App;
