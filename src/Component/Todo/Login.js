// src/Component/Auth/Login.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Action/authAction";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./login.css"; // Import custom CSS

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }, navigate, toast));
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h2>Welcome to...</h2>
        <p>Manage your tasks</p>{" "}
      </div>

      <div className="login-right">
        <h3 className="login-title">Login</h3>
        <p className="login-subtitle">Welcome! Login.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>User Name</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-remember">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            <span>Remember me</span>
          </div>

          <button type="submit" className="login-btn">
            LOGIN
          </button>
        </form>

        <div className="login-footer">
          <span>
            New User? <Link to="/signup">Signup</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
