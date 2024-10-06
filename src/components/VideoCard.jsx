const VideoCard = ({ video }) => {
  const videoImg = video?.snippet?.thumbnails?.medium;

  return (
    <div className="w-56">
      <img src={videoImg.url} alt={video.title} />
    </div>
  );
};

export default VideoCard;
