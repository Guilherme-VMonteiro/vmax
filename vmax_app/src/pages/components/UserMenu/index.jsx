import React from "react";

const UserMenu = ({userProfile}) => {
  return (
    <div className="container flex justify-end h-fit">
      <div className="max-h-9 max-w-9 overflow-hidden rounded-full border-2 ">
        <img
          src={userProfile.userImage}
          alt="User profile"
          className="h-9 aspect-auto max-w-none cursor-pointer"
          onClick={() => console.log("TODO: USER PROFILE ACTION")}
        />
      </div>
      <div className="max-h-9 w-30 max-w-none flex items-center">
        <h4
          className="px-5 text-white"
          onClick={() => console.log("TODO: ENTER USER CHANNEL", userProfile.userUrl)}
        >
          {userProfile.userName}
        </h4>
      </div>
    </div>
  );
};

export default UserMenu;
