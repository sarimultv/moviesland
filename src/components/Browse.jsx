import Header from "./Header";
import { useFetchVideos } from "../customhook/useFetchVideos";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import { BODY_BG_IMG } from "../utils/constants";

const Browse = () => {
  useFetchVideos();

  const showGPT = useSelector((store) => store.gpt.showGPT);

  return (
    <div>
      <Header />
      {showGPT ? (
        <>
          <div className="fixed -z-30">
            <img
              className="w-screen h-screen object-cover"
              src={BODY_BG_IMG}
              alt="backgroundImage"
            />
          </div>
          <GptSearch />
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
