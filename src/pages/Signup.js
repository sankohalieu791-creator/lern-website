import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/Auth.css';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signup } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }
    // Simulate API call
    const userData = {
      id: Date.now(),
      email,
      name: email.split('@')[0],
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
      bio: '',
      location: '',
      followers: 0,
      following: 0,
    };
    signup(userData);
    navigate('/feed');
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">LERN</h1>
        <p className="auth-subtitle">Create your account</p>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            className="auth-input"
          />
          {error && <p className="auth-error">{error}</p>}
          <button type="submit" className="auth-button">
            Sign up
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <button onClick={() => navigate('/login')} className="link-btn">Login</button>
        </p>
      </div>
    </div>
  );
};
