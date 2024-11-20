import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const videoId = video?.id;
  const videoImg = video?.snippet?.thumbnails?.medium;
  // console.log(video);

  return (
    <div className="w-56">
      <Link to={`/videoView/${videoId}`}>
        <img className="w-56" src={videoImg.url} alt={video.title} />
      </Link>
    </div>
  );
};

export default VideoCard;
