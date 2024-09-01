import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from 'axios';

import DarkModeToggle from "../DarkModeToggle";
import LoginBackground from '../../assets/Wallpaper.webp';
import Logo from '../../assets/triumph-log.png';
import { useAuth } from "../../context/AuthProvider";

const Login = () => {

  const apiUrl = import.meta.env.VITE_API_URL;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const validateForm = () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return false;
    }
    return true;
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/api/login/`, {
        email,
        password
      });
      console.log(response);
      if (response.status === 200) {
        console.log(response.data);
        login({
          access: response.data.access,
          refresh: response.data.refresh,
          user: response.data.user,
        });
        window.location.href = "/";
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data) {
        const errorMessages = error.response.data;
        // Check for specific error message format
        if (typeof errorMessages === 'string') {
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: errorMessages,
          });
        } else {
          let errorMessage = '';
          for (const key in errorMessages) {
            if (errorMessages.hasOwnProperty(key)) {
              errorMessage += `${errorMessages[key].join(' ')}\n`;
            }
          }
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: errorMessage || 'An error occurred during login.',
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'An unexpected error occurred',
          text: 'Please try again later.',
        });
      }
    }
  };
  


  return (
    <div className="gradient-form bg-neutral-300 dark:bg-neutral-700">
      <div className="min-h-screen flex justify-center items-center px-20 mx-auto max-w-screen-2xl">
        <div className="g-6 flex text-neutral-800 dark:text-neutral-200 w-full">
          <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800 w-full">
            <div className="g-0 lg:flex lg:flex-wrap">
              {/* Left Column */}
              <div className="px-4 md:px-0 lg:w-6/12">
                <DarkModeToggle />
                <div className="md:mx-5 md:p-12">
                  <div className="text-center">
                    <img className="mx-auto w-48" src={Logo} alt="logo" />
                  </div>
                  <p className="mb-4 text-center">
                    Please login to your account
                  </p>
                  <form onSubmit={handleLogin}>
                    <div className="mb-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        autoComplete="off"
                        required
                        className="block w-full px-4 py-2 rounded border border-neutral-400 dark:border-neutral-600 bg-transparent focus:outline-none focus:ring focus:border-primary-500 dark:focus:border-primary-500 placeholder-neutral-500 dark:placeholder-neutral-300 text-neutral-700 dark:text-neutral-300"
                        placeholder="Email"
                      />
                    </div>

                    <div className="mb-4">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        autoComplete="off"
                        required
                        className="block w-full px-4 py-2 rounded border border-neutral-400 dark:border-neutral-600 bg-transparent focus:outline-none focus:ring focus:border-primary-500 dark:focus:border-primary-500 placeholder-neutral-500 dark:placeholder-neutral-300 text-neutral-700 dark:text-neutral-300"
                        placeholder="Password"
                      />
                    </div>

                    <div className="mb-6 text-center">
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-3 px-10 rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      >
                        Log In
                      </button>
                    </div>
                  </form>

                  <div className="flex items-center justify-between">
                    <p>Don't have an account?</p>
                    <Link
                      to="/register"
                      className="px-4 py-2 bg-transparent border border-danger text-danger-600 rounded hover:bg-danger-100 hover:text-danger-700 focus:outline-none focus:border-danger-600 focus:text-danger-600 dark:border-danger-400 dark:hover:bg-danger-100 dark:hover:text-danger-700 dark:focus:border-danger-400 dark:focus:text-danger-600"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div
                className="hidden lg:flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                style={{
                  backgroundImage: `url(${LoginBackground})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="px-4 py-20 text-white md:mx-6 md:p-12">
                  <h4 className="mb-12 text-xl font-semibold">
                    We are more than just a company
                  </h4>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 

export default Login;
