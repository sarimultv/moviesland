import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/store.js/userSlice";

const Login = () => {
  const [isFormSign, setIsFormSign] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSigInBtn = () => {
    setIsFormSign(!isFormSign);
  };

  const handleOnClickBtn = () => {
    //Validate form input
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    console.log(message);
    if (message) return;

    if (!isFormSign) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);

          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/49907699?v=4",
          })
            .then(() => {
              alert("profile updated");
              navigate("/browse");
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode - errorMessage);
          console.log(error);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode - errorMessage);
          //console.log(errorCode - errorMessage);
        });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg"
          alt="backgroundImage"
        />
      </div>

      <form
        onSubmit={(evt) => evt.preventDefault()}
        className="absolute my-36 sm:w-6/12 md:w-4/12 lg:w-4/12 p-10 mx-auto right-0 left-0 bg-black bg-opacity-85 text-white rounded"
      >
        <h1 className="w-full text-3xl font-bold py-3 mt-3 mb-2">
          {isFormSign ? "Sign In" : "Sign Up"}
        </h1>
        {!isFormSign && (
          <input
            ref={fullName}
            className="border-white p-4 my-3 w-full rounded bg-gray-700 bg-opacity-85"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="border-white p-4 my-3 w-full rounded bg-gray-700 bg-opacity-85"
          type="text"
          placeholder="Email or mobile Number"
        />

        <input
          ref={password}
          className="border-white p-4 my-3 w-full rounded bg-gray-700 bg-opacity-85"
          type="Password"
          placeholder="Password"
        />
        <p className="text-red-700 mt-2">{errorMessage}</p>
        <button
          className="border-red-700 p-2 my-6 w-full bg-red-700 rounded"
          type="button"
          onClick={handleOnClickBtn}
        >
          {isFormSign ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-lg my-3 cursor-pointer" onClick={toggleSigInBtn}>
          {isFormSign
            ? "New to moviesLand? Sign Up now"
            : "Already registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
