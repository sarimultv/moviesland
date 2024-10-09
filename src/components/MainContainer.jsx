import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const videos = useSelector((store) => store.videos?.mostPopular);
  if (!videos) return;

  const mainVideo = videos[0];

  const { title, description } = mainVideo.snippet;
  const { id } = mainVideo;
  return (
    <div className="md:pt-0 pt-[45%] bg-black">
      <VideoTitle title={title} description={description} />
      <VideoBackground videoId={id} />
    </div>
  );
};

export default MainContainer;
