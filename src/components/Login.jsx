import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isFormSign, setIsFormSign] = useState(true);

  const handleSignUpBtn = () => {
    setIsFormSign(!isFormSign);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg"
          alt="backgroundImage"
        />
      </div>

      <form className="absolute my-36 w-4/12 p-10 mx-auto right-0 left-0 bg-black bg-opacity-85 text-white rounded">
        <h1 className="w-full text-3xl font-bold py-3 mt-3 mb-2">
          {isFormSign ? "Sign In" : "Sign Up"}
        </h1>
        {!isFormSign && (
          <input
            className="border-white p-4 my-3 w-full rounded bg-gray-700 bg-opacity-85"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="border-white p-4 my-3 w-full rounded bg-gray-700 bg-opacity-85"
          type="text"
          placeholder="Email or mobile Number"
        />
        <input
          className="border-white p-4 my-3 w-full rounded bg-gray-700 bg-opacity-85"
          type="Password"
          placeholder="Password"
        />
        <button
          className="border-red-700 p-2 my-6 w-full bg-red-700 rounded"
          type="button"
        >
          {isFormSign ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-lg my-3 cursor-pointer" onClick={handleSignUpBtn}>
          {isFormSign
            ? "New to moviesLand? Sign Up now"
            : "Already registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
