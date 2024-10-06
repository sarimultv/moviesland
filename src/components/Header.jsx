import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LANG_PHRASE, LOGO, SUPPORTED_LANG } from "../utils/constants";
import { signOut } from "firebase/auth";
import { showGptSearch } from "../store/gptSlice";
import { changeLanguage } from "../store/languageSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showLang = useSelector((store) => store.gpt.showGPT);
  const lan = useSelector((store) => store.language.lang);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {});
  };

  const handleGptSearch = () => {
    dispatch(showGptSearch());
  };

  const handleLangOption = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between items-center">
      <div>
        <img className="w-44" src={LOGO} alt="moviesLandLogo" />
      </div>
      <div>
        {user && (
          <div className="flex justify-end items-center m-2 p-2">
            {showLang && (
              <select
                className="p-2 border border-gray-500 bg-gray-600 rounded text-white"
                onChange={handleLangOption}
              >
                {SUPPORTED_LANG.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="bg-gray-500 p-2 m-2 rounded text-white"
              onClick={handleGptSearch}
            >
              {showLang ? "Home" : LANG_PHRASE[lan].GptSearchBtn}
            </button>
            <img
              className="w-10 h-10 rounded z-50"
              src={user.photoURL}
              alt="userLogo"
            />
            <button
              className="border border-gray-600 p-2 m-2 text-white bg-red-700 font-bold rounded cursor-pointer z-50"
              onClick={handleSignOut}
            >
              {LANG_PHRASE[lan].signOutBtn}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
