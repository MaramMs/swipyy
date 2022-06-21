import { Routes, Route } from "react-router-dom";
import { SignUp,SignIn, Verification,ChangePassword } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
    </div>
  );
}

export default App;
