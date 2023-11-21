import React from "react";
import "../index.css";
import { MenuIcon } from "@heroicons/react/solid";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { collection, doc, getDoc, addDoc, setDoc  } from "firebase/firestore"
import { Link, useNavigate } from "react-router-dom";

function Header() {
  // const navItems = [];
  const navi = useNavigate();
  const GoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    
    
    
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const userEmail = user.email;

      // Check if the user already exists in Firestore
      const usersCollection = collection(db, 'users');
      // const userDocument = usersCollection.doc(userEmail);

      const docRef = doc(db, 'Users', userEmail)
      
        getDoc(docRef)
        .then((doc) => {
          if (doc.exists()) {
            // User already exists
            console.log('User already exists:', doc.data());
          } else {
            // User doesn't exist, create a new document
            console.log('User did not exist previously');
            const userData = {
              displayName: user.displayName,
              // Add other user data as needed
            };

            setDoc(docRef, userData)
              .then(() => {
                console.log('User document created successfully!');

                const resourcesCollection = collection(docRef, 'resources');
                const resourceData = {};
                addDoc(resourcesCollection, resourceData)
                .then(()=>{
                  console.log('Resource document created successfully!');
                })
                
              })
              .catch((error) => {
                console.error('Error creating user document: ', error);
              });
          }
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

      // Navigate to the dashboard
      navi("/dashboard");
    })

  }

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
