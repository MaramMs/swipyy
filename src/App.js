import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { SignUp,SignIn } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
