import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { SignUp,SignIn, Verification } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/verification" element={<Verification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
