import VideoCard from "./VideoCard";

const VideoList = ({ title, videos }) => {
  // console.log(videos);
  return (
    videos && (
      <div className="px-8">
        <h1 className="font-bold text-lg py-3 text-white">{title}</h1>
        <div className="flex overflow-x-scroll">
          <div className="flex gap-2">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default VideoList;
