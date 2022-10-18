import React, { useContext } from "react";
// import AvatarImg from "../img/tsuyu.png";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="logo">Awesome Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button
          onClick={() => {
            signOut(auth);
          }}
          className="btn"
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
