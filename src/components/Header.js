import React from "react";
import "../index.css";
import { MenuIcon } from "@heroicons/react/solid";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  // const navItems = [];
  const navi = useNavigate();
  const GoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        navi("/dashboard");
        // The signed-in user info.
        const user = result.user;
        //console.log(user)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <header className="container flex justify-between shadow-md md:shadow-none h-20 ">
      <Link to={"/"}>
        <img
          className="w-52 -mt-7 h-40 scale-125 md:hidden lg:block"
          src="./images/logo_ace.png"
          alt=""
        />
        <img
          className="hidden md:inline-block lg:hidden"
          src="./images/logo_ace.png"
          alt=""
          width="45"
        />
      </Link>

      <div className="flex items-center">
        <MenuIcon className="h-10 md:hidden" />
        <div className="hidden md:flex items-center space-x-3 lg:space-x-8">
          {/* <div className="hidden max-w-xl md:grid gap-4 grid-cols-4 text-right"> */}
          {/* <p className="nav-item">Product</p>
          <p className="nav-item">Customers</p> */}
          <a href="#features" className="scroll-smooth nav-item">
            About Us
          </a>
          <p className="nav-item">Resources</p>
          {/* </div> */}

          <button onClick={GoogleLogin} className="primary-button">
            Login With Google
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
