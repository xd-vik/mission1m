import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils.jsx";
import { ToastContainer } from "react-toastify";

const Login = () => {
  
  const navigate = useNavigate();

  // Corrected the variable name to loginInfo
  const [loginInfo, setLoginInfo] = useState({
      email: '',
      password: ''
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setLoginInfo((prev) => ({
          ...prev,
          [name]: value
      }));
  };

  const handleLogin = async (e) => {
      e.preventDefault();
      const { email, password } = loginInfo; // Corrected here to use loginInfo

      if (!email || !password) {
          return handleError('All fields are required');
      }

      try {
          const url = "http://localhost:8080/auth/login";
          const response = await fetch(url, {
              method: "POST",
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(loginInfo) // Corrected here to use loginInfo
          });

          const result = await response.json();
          const { success, message, jwtToken, name } = result;
          
          if (success) {
              handleSuccess(message);
              localStorage.setItem('token', jwtToken);
              localStorage.setItem('loggedInUser', name);
              setTimeout(() => {
                  navigate('/');
              }, 1000);
          } else {
              handleError(message || 'Login failed');
          }
      } catch (err) {
          handleError('An error occurred. Please try again.');
      }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
          Login to Your Account
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm text-green-700" htmlFor="email">
              Email Address
            </label>
            <input
              onChange={handleChange}
              id="email"
              type="email"
              name="email"
              className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
              required
              value={loginInfo.email}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-green-700" htmlFor="password">
              Password
            </label>
            <input
              onChange={handleChange}
              id="password"
              type="password"
              name="password"
              className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
              required
              value={loginInfo.password}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-600 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>

        <p className="text-sm text-center mt-6 text-green-700">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;
