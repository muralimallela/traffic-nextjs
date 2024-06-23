"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
   
    let hasError = false;

    if (!username) {
      setUsernameError("Please enter your name.");
      hasError = true;
    } else {
      setUsernameError("");
    }

    if (!email) {
      setEmailError("Please enter your email.");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (hasError) {
      return;
    }

    toast.success("Successfully Registered ! Please Login");
    setTimeout(() => {
      router.push("/login");
    }, 1500);
    // try {
    //   await axios.post('YOUR_API_ENDPOINT', {
    //     username,
    //     email,
    //   });
    //   toast.success('Signup successful!');
    //   setUsername('');
    //   setEmail('');
    // } catch (err) {
    //   toast.error('Signup failed. Please try again.');
    // }
  };

  return (
    <div className="relative  flex flex-col items-center bg-white">
      <ToastContainer />

      <div className="relative bg-[#8b68f7] border border-black rounded-lg shadow-lg p-6 sm:p-8 mt-0 sm:mt-8 w-9/12 max-w-md z-30">
        <div className="absolute inset-0 border-2 border-black bg-white rounded-lg transform -translate-x-2 translate-y-2 -z-10"></div>
        <div className="relative rounded-lg p-2">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
            Signup:
          </h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4 sm:mb-6">
              <label
                htmlFor="name"
                className="block text-sm sm:text-base font-medium text-gray-700"
              >
                Name
              </label>
              {usernameError && (
                <p className="text-red-500 text-xs sm:text-sm mb-1">
                  {usernameError}
                </p>
              )}
              <input
                type="text"
                id="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                name="name"
                className="mt-1 block w-full py-2 px-4 text-sm border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div className="mb-4 sm:mb-6">
              <label
                htmlFor="email"
                className="block text-sm sm:text-base font-medium text-gray-700"
              >
                Email
              </label>
              {emailError && (
                <p className="text-red-500 text-xs sm:text-sm mb-1">
                  {emailError}
                </p>
              )}
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                className="mt-1 block w-full py-2 px-4 text-sm border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="w-auto sm:w-auto px-4 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                aria-label="Submit"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="mt-8 sm:mt-16 text-xs sm:text-sm text-gray-700">
              Already have an account?{" "}
              <Link href="/login" className="text-[#3DB0F1] font-medium">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
