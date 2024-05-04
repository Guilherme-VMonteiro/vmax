import React, { useState } from "react";
import UserMenu from "../UserMenu";
import userImage from "../../../assets/user_profile_image.jpg";

const Header = () => {
  const user = {
    userName: "Guilherme Monteiro",
    userImage: userImage,
    userUrl: "#urlDoUsuario",
  };

  const [userProfile] = useState(user);

  return (
    <div className="flex flex-nowrap h-20 px-10 items-center bg-gray-900">
      <div className="container ml-20">
        <a href="#HOME">
          <h1 className="text-white text-3xl font-bold">
            V<span className="text-red-600">max</span>
          </h1>
        </a>
      </div>

      <div className="container content-center">
        {userProfile ? (
          <UserMenu userProfile={userProfile} />
        ) : (
          <ul className="container flex flex-nowrap justify-end">
            <li>
              <a href="#a" className="text-white font-bold hover:underline">
                Signup
              </a>
            </li>
            <li className="ml-20">
              <a href="#b" className="text-white font-bold hover:underline">
                Login
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
