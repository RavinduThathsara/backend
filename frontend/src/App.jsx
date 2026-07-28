import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";
import HomePage from "./pages/homePage";

function SimplePage({ title }) {
  return <div className="min-h-screen flex items-center justify-center text-3xl font-semibold text-slate-800">{title}</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<SimplePage title="About Page" />} />
        <Route path="/products" element={<SimplePage title="Products Page" />} />
        <Route path="/contact" element={<SimplePage title="Contact Page" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/forgot-password" element={<SimplePage title="Forgot Password" />} />
        <Route path="/terms" element={<SimplePage title="Terms of Service" />} />
        <Route path="/privacy" element={<SimplePage title="Privacy Policy" />} />
        <Route path="*" element={<h1>404 Error</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;