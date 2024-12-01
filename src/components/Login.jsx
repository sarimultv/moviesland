import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { BODY_BG_IMG, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isFormSign, setIsFormSign] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();

  const toggleSigInBtn = () => {
    setIsFormSign(!isFormSign);
  };

  const handleOnClickBtn = () => {
    //Validate form input
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

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

          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
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
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode - errorMessage);
        });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="fixed h-screen">
        <img
          className="w-screen h-screen object-cover"
          src={BODY_BG_IMG}
          alt="backgroundImage"
        />
      </div>

      <form
        onSubmit={(evt) => evt.preventDefault()}
        className="absolute md:my-16 my-28 sm:w-8/12 md:w-5/12 lg:w-4/12 md:p-10 p-5 mx-auto right-2 left-2 bg-black bg-opacity-85 text-white rounded shadow-lg"
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
          placeholder="you@example.com"
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
