import React from "react";

//ICONS
import { FaRegAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Modal = ({ modalOption }) => {
   return (
      <div className="w-screen min-w-96 absolute top-1/4 flex flex-col justify-center items-center">
         {modalOption === "SIGNUP" ? (
            <div className="w-11/12 md:w-3/4 xl:w-3/6 px-7 py-10 max-w-2xl flex flex-col gap-2 bg-gray-700 rounded-2xl text-white shadow-2xl">
               <h1 className="text-2xl md:text-3xl font-bold">
                  Create new account<span className="text-red-700">.</span>
               </h1>
               <div className="flex gap-2 my-2">
                  <p className="opacity-70">Already a member?</p>
                  <a
                     href="#a"
                     className="text-red-500 opacity-70 hover:opacity-100 hover:underline"
                  >
                     Login
                  </a>
               </div>
               <div className="flex flex-col">
                  <div className="w-full flex flex-col gap-1 xl:flex-row xl:gap-1">
                     <div className="bg-gray-600 px-4 py-2 rounded-2xl flex items-center justify-between">
                        <div>
                           <label className="opacity-70">First name</label>
                           <input
                              type="text"
                              placeholder="Guilherme"
                              className="w-full bg-transparent outline-none"
                           />
                        </div>
                        <FaRegAddressCard className="text-xl" />
                     </div>
                     <div className="bg-gray-600 px-4 py-2 rounded-2xl flex items-center justify-between">
                        <div>
                           <label className="opacity-70">Last name</label>
                           <input
                              type="text"
                              placeholder="Monteiro"
                              className="w-full bg-transparent outline-none"
                           />
                        </div>
                        <FaRegAddressCard className="text-xl" />
                     </div>
                  </div>
                  <div className="w-full flex flex-col gap-1 my-1">
                     <div className="bg-gray-600 px-4 py-2 rounded-2xl flex items-center justify-between">
                        <div className="w-full">
                           <label className="opacity-70">Email</label>
                           <input
                              type="email"
                              placeholder="email@mail.com"
                              className="w-full bg-transparent outline-none"
                              autocomplete="off"
                           />
                        </div>
                        <MdEmail className="text-xl" />
                     </div>
                     <div className="bg-gray-600 px-4 py-2 rounded-2xl flex items-center justify-between">
                        <div className="w-full">
                           <label className="opacity-70">Password</label>
                           <input
                              type="password"
                              placeholder="password"
                              className="w-full bg-transparent outline-none"
                              autocomplete="off"
                           />
                        </div>
                        <button>
                           <FaRegEye className="text-xl" />
                        </button>
                     </div>
                  </div>
               </div>
               <div className="w-full flex justify-center mt-3">
                  <button className="bg-red-500 w-2/3 p-2 rounded-2xl font-bold hover:bg-red-600">
                     Create account
                  </button>
               </div>
            </div>
         ) : (
            ""
         )}
         {modalOption === "LOGIN" ? (
            <div className="w-11/12 md:w-3/4 xl:w-3/6 px-7 py-10 max-w-2xl flex flex-col gap-2 items-center bg-gray-700 rounded-2xl text-white shadow-2xl">
               <h1 className="text-3xl md:text-4xl font-bold">
                  Welcome back<span className="text-red-700 text-4xl">!</span>
               </h1>
               <div className="flex gap-2 my-2">
                  <p className="opacity-70">Already a member?</p>
                  <a
                     href="#a"
                     className="text-red-500 opacity-70 hover:opacity-100 hover:underline"
                  >
                     Login
                  </a>
               </div>
               <div className="flex flex-col w-11/12">
                  <div className="w-full flex flex-col gap-1 my-1">
                     <div className="bg-gray-600 px-4 py-2 rounded-2xl flex items-center justify-between">
                        <div className="w-full">
                           <label className="opacity-70">Email</label>
                           <input
                              type="email"
                              placeholder="email@mail.com"
                              className="w-full bg-transparent outline-none"
                              autocomplete="off"
                           />
                        </div>
                        <MdEmail className="text-xl" />
                     </div>
                     <div className="bg-gray-600 px-4 py-2 rounded-2xl flex items-center justify-between">
                        <div className="w-full">
                           <label className="opacity-70">Password</label>
                           <input
                              type="password"
                              placeholder="password"
                              className="w-full bg-transparent outline-none"
                              autocomplete="off"
                           />
                        </div>
                        <button>
                           <FaRegEye className="text-xl" />
                        </button>
                     </div>
                  </div>
               </div>
               <a href="#a" className="opacity-50 hover:opacity-100">Forgot your password?</a>
               <div className="w-full flex justify-center mt-3">
                  <button className="bg-red-500 w-2/3 p-2 rounded-2xl font-bold hover:bg-red-600">
                     Login
                  </button>
               </div>
            </div>
         ) : (
            ""
         )}
      </div>
   );
};

export default Modal;
