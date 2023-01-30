import "./project.less";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./Login";
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { useState } from "react";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleUsername = (username: string) => {
    return "user";
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={isLoggedIn ?
            <Dashboard /> : <Login onLogin={handleLogin} />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

