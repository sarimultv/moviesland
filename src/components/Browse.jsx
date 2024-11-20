import Header from "./Header";
import { useFetchVideos } from "../customhook/useFetchVideos";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GeminiSearch from "./GeminiSearch";
import { useSelector } from "react-redux";
import { BODY_BG_IMG } from "../utils/constants";

const Browse = () => {
  useFetchVideos();

  const showGemini = useSelector((store) => store.gemini.showGemini);

  return (
    <div className="min-h-screen">
      <Header />
      {showGemini ? (
        <>
          <div className="fixed -z-30">
            <img
              className="w-screen h-screen object-cover"
              src={BODY_BG_IMG}
              alt="backgroundImage"
            />
          </div>
          <GeminiSearch />
        </>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
