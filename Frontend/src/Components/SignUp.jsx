import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';

function Signup() {
    const navigate = useNavigate();

    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupInfo((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;

        if (!name || !email || !password) {
            return handleError('All fields are required');
        }

        try {
            const url = "http://localhost:8080/auth/signup";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });

            const result = await response.json();
            const { success, message } = result;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/register');
                }, 1000);
            } else {
                handleError(message || 'Signup failed');
            }
        } catch (err) {
            handleError('An error occurred. Please try again.');
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-green-100'>
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <div className='mb-4'>
                        <label htmlFor="name" className="block text-gray-700">Name</label>
                        <input
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            onChange={handleChange}
                            type="text"
                            name='name'
                            autoFocus
                            placeholder='Enter Your Name...'
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            onChange={handleChange}
                            type="email"
                            name='email'
                            placeholder='Enter Your Email...'
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            onChange={handleChange}
                            type="password"
                            name='password'
                            placeholder='Enter Your Password...'
                        />
                    </div>
                    <button
                        className="w-full my-2 px-4 py-2 bg-green-500 text-white p-3 rounded hover:bg-green-600 transition duration-300"
                        type="submit"
                    >Sign Up</button>
                    <span>Already have an account? <Link to="/login" className="text-blue-500">Login</Link></span>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
}

export default Signup;
