import { Routes, Route } from "react-router-dom";
import { SignUp,SignIn, Verification } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/verification" element={<Verification />} />
      </Routes>
    </div>
  );
}

export default App;
