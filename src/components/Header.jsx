import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LANG_PHRASE, LOGO, SUPPORTED_LANG } from "../utils/constants";
import { signOut } from "firebase/auth";
import { showGeminiSearch } from "../store/geminiSlice";
import { changeLanguage } from "../store/languageSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showLang = useSelector((store) => store.gemini.showGemini);
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

  const handleGeminiSearch = () => {
    dispatch(showGeminiSearch());
  };

  const handleLangOption = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full md:px-8 md:py-2 md:bg-gradient-to-b md:from-red-800 z-20 flex justify-between items-center md:flex-row flex-col">
      <div className="md:m-0 mt-3 bg-red-400 p-2 rounded">
        <img className="w-48" src={LOGO} alt="moviesLandLogo" />
      </div>
      <div className="md:-mt-0 -mt-4">
        {user && (
          <div className="flex justify-end items-center m-2 p-2">
            {showLang && (
              <select
                className="p-2 m-2 md:m-0 border border-gray-500 bg-gray-600 rounded text-white"
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
              onClick={handleGeminiSearch}
            >
              {showLang
                ? LANG_PHRASE[lan].homeBtn
                : LANG_PHRASE[lan].geminiSearchBtn}
            </button>
            <img
              className="w-10 h-10 rounded z-50 hidden md:inline"
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
