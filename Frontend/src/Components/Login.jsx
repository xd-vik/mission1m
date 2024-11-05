import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Login to Your Account</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-2 text-sm text-green-700" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-green-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
              required
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
          <a href="#" className="text-green-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;


