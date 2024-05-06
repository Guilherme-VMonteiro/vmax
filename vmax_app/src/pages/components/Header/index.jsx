import React, { useState } from "react";
import UserMenu from "../UserMenu";
import userImage from "../../../assets/user_profile_image.jpg";

// ICONS
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Header = (props) => {
   // const user = {
   //   userName: "Guilherme Monteiro",
   //   userImage: userImage,
   //   userUrl: "#urlDoUsuario",
   // };

   // const [userProfile] = useState(user);

   const [showMenu, setShowMenu] = useState(false);
   const [isLogged, setIsLogged] = useState(false);

   return (
      <header className="bg-purple-700">
         <nav className="relative p-4 flex justify-between items-center bg-gray-900 text-white">
            <a
               className="text-3xl font-bold leading-none pl-5"
               href="http://localhost:3000/"
            >
               <h1>
                  V<span className="text-red-700">max</span>
               </h1>
            </a>
            <div className="lg:hidden">
               <button
                  id="menu-button"
                  className="flex items-center p-3"
                  onClick={() => {
                     setShowMenu(!showMenu);
                  }}
               >
                  <FaBars title="Menu" />
               </button>
            </div>
            {isLogged ? (
               <>
                  <ul className="hidden absolute top-1/2 left-1/2 font-bold transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
                     <li>
                        <a className="text-sm hover:underline" href="http://localhost:3000/">
                           Home
                        </a>
                     </li>
                     <li>
                        <a className="text-sm hover:underline" href="#a">
                           High
                        </a>
                     </li>
                     <li>
                        <a className="text-sm hover:underline" href="#a">
                           New
                        </a>
                     </li>
                     <li>
                        <a className="text-sm hover:underline" href="#a">
                           Your Channel
                        </a>
                     </li>
                     <li>
                        <a className="text-sm hover:underline" href="#a">
                           History
                        </a>
                     </li>
                  </ul>
                  <a
                     className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 opacity-50 hover:opacity-100 bg-gray-100/50 hover:bg-gray-300 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
                     href="#a"
                  >
                     Log out
                  </a>
               </>
            ) : (
               <>
                  <a
                     className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-100 hover:bg-gray-300 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
                     href="#a"
                     onClick={() => {
                        props.changeModal("SIGNUP");
                     }}
                  >
                     Sign Up
                  </a>
                  <a
                     className="hidden lg:inline-block py-2 px-6 bg-red-500 hover:bg-red-600 text-sm text-white font-bold rounded-xl transition duration-200"
                     href="#a"
                     onClick={() => {
                        props.changeModal("LOGIN");
                     }}
                  >
                     Login
                  </a>
               </>
            )}
         </nav>
         <div className={`relative z-50 ${showMenu ? "" : "hidden"}`}>
            <div
               className="fixed inset-0 bg-gray-800 opacity-25"
               onClick={() => {
                  setShowMenu(!showMenu);
               }}
            ></div>
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
               <div className="flex items-center mb-8">
                  <a
                     className="mr-auto text-3xl font-bold leading-none pl-5"
                     href="http://localhost:3000/"
                  >
                     <h1>
                        V<span className="text-red-700">max</span>
                     </h1>
                  </a>
                  <button id="navbar-close">
                     <IoClose
                        className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                        onClick={() => {
                           setShowMenu(!showMenu);
                        }}
                     />
                  </button>
               </div>
               <div>
                  <ul>
                     <li className="mb-1">
                        <a
                           className="block p-4 text-sm font-semibold text-gray-400 hover:bg-gray-200 hover:text-red-700 rounded"
                           href="http://localhost:3000/"
                        >
                           Home
                        </a>
                     </li>
                     <li className="mb-1">
                        <a
                           className="block p-4 text-sm font-semibold text-gray-400 hover:bg-gray-200 hover:text-red-700 rounded"
                           href="#a"
                        >
                           High
                        </a>
                     </li>
                     <li className="mb-1">
                        <a
                           className="block p-4 text-sm font-semibold text-gray-400 hover:bg-gray-200 hover:text-red-700 rounded"
                           href="#a"
                        >
                           New
                        </a>
                     </li>
                     <li className="mb-1">
                        <a
                           className="block p-4 text-sm font-semibold text-gray-400 hover:bg-gray-200 hover:text-red-700 rounded"
                           href="#a"
                        >
                           Your Channel
                        </a>
                     </li>
                     <li className="mb-1">
                        <a
                           className="block p-4 text-sm font-semibold text-gray-400 hover:bg-gray-200 hover:text-red-700 rounded"
                           href="#a"
                        >
                           History
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="mt-auto">
                  <div className="pt-6">
                     <a
                        className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-gray-100 hover:bg-gray-300 rounded-xl shadow-md"
                        href="#a"
                        onClick={() => {
                           props.changeModal("SIGNUP");
                           setShowMenu(!showMenu);
                        }}
                     >
                        Sign up
                     </a>
                     <a
                        className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-red-500 hover:bg-red-600 rounded-xl shadow-md"
                        href="#a"
                        onClick={() => {
                           props.changeModal("LOGIN");
                           setShowMenu(!showMenu);
                        }}
                     >
                        Login
                     </a>
                  </div>
               </div>
            </nav>
         </div>
      </header>
   );
};

export default Header;
