// src/Component/Auth/Register.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Action/authAction";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./login.css"; // Reuse the same CSS

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ username, email, password }, navigate, toast));
  };

  return (
    <div className="login-container">
      {/* Left Side */}
      <div className="login-left">
        <div className="logo">COMPANY LOGO</div>
        <h2>Join Us...</h2>
        <p>
          Create your account and start managing your tasks
        </p>
        {/* <footer>Lorem ipsum dolor sit amet</footer> */}
      </div>

      {/* Right Side */}
      <div className="login-right">
        <h3 className="login-title">Register</h3>
        <p className="login-subtitle">
          Fill in the details below to create your account.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={username}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            REGISTER
          </button>
        </form>

        <div className="login-footer">
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
