import React, { useState } from 'react';
import './SignIn.css';
import avatarImage from '../Images/icon.png'; 
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const navi = useNavigate();
  const handleSignIn = () => {
    
    if (password !== '' && email !== '') {
      alert('Sign in successful!');
      navi("/Home");
     
    } else {
      alert('Please fill in all fields.');
    }
  };


  return (
    <div className='bd'>
    <div className="signin-container">
      <form className="signin-form">
      <Avatar src={avatarImage} className='ava'>
              <LockOutlinedIcon />
            </Avatar>
        <h2>Sign In</h2>

        <label htmlFor="email">Username:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />


        
        <button type="button" onClick={handleSignIn} className='bu'>Sign In</button>

        <div className="additional-links">
          <a href="/Forgot">Forgot Password?</a>
          <span> | </span>
          <a href="/SignUp">Don't have an account? Sign Up</a>
        </div>
      </form>
    </div>
    </div>
  );
};

export default SignIn;
