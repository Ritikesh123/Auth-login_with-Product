import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Products from './Products';
import Navbar from './Navbar';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleRegistration = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError('All fields are mandatory');
      return;
    }

    // Add email validation logic (e.g., checking for a valid email format)
    if (!isValidEmail(email)) {
      setError('Invalid email address');
      return;
    }

    // Add password validation logic (e.g., requiring a minimum length)
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    // Registration logic (assuming successful registration)
    setIsLoggedIn(true);
  };

  // const handleLogout = () => {
  //   // Add logout logic here
  //   setIsLoggedIn(false);
  //   setUsername('');
  //   setEmail('');
  //   setPassword('');
  //   setError('');
  // };

  const isValidEmail = (email) => {
    // You can use a regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  if (isLoggedIn) {
    return (
      <div>
        <Navbar />
      <div className="text-center mt-4">
        <p className='text-gray-500 font-bold text-lg'>Welcome, {username}!</p>
        
        <Products />
      </div>
      </div>
    );
  }


  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-1/3 bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Registration</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleRegistration}
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
