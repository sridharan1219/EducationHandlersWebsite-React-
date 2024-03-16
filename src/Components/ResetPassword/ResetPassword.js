import React, { useState } from 'react';

import './ResetPassword.css';

import { useNavigate } from 'react-router-dom';
const ResetPassword = () => {
    const [verificationCode, setVerificationCode] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerification = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
     
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMessage('Code successfully Send.');
    } catch (error) {
      setMessage('Error verifying email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const navi = useNavigate();
  const handleCodeButtonClick = () => {
       navi('/SignIn')
  };

 
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
 
  
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

   
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match.');
      setLoading(false);
      return;
    }

   
    try {
     
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setMessage('Code successfully Send.');
    
     
    } catch (error) {
     
      setMessage('Error resetting password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='body'>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>Reset Password</h2>
          {message && <div className="flash-message">{message}</div>}
          <label htmlFor="verification_code">Enter Email:</label>
          <input
            type="text"
            id="verification_code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Verifying Email...' : 'Verify Email'}
          </button>
        <br></br>
          <label htmlFor="verification_code">Enter the Code:</label>
        <input type='text'></input>
          <label htmlFor="new_password">New Password:</label>
          <input
            type="password"
            id="new_password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
           
          />

          <label htmlFor="confirm_password">Confirm Password:</label>
          <input
            type="password"
            id="confirm_password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
           
          />

          <button type="submit" disabled={loading} onClick={handleCodeButtonClick}>
            {loading ? 'Setting New Password...' : 'Set New Password'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
