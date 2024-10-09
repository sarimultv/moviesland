import { useSelector } from "react-redux";
import VideoList from "./VideoList";

const SecondaryContainer = () => {
  const videos = useSelector((store) => store.videos);

  return (
    <div className="bg-black md:p-2 md:pb-4 pb-4">
      <div className="md:-mt-52 relative z-30 ">
        <VideoList title={"Now Playing"} videos={videos.mostPopular} />
        <VideoList title={"Most Popular"} videos={videos.mostPopular} />
        <VideoList title={"Trending"} videos={videos.mostPopular} />
        <VideoList title={"Upcoming"} videos={videos.mostPopular} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
