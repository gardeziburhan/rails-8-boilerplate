import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import ForgotPassword from "./pages/ForgotPasswordPage";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
