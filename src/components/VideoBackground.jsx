const VideoBackground = ({ videoId }) => {
  return (
    <iframe
      className="w-full aspect-video"
      src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&playerapiid=myvideo&version=3&rel=0&autoplay=1&mute=1&loop=1`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

export default VideoBackground;
