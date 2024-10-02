const VideoTitle = ({ title, description }) => {
  return (
    <div className="absolute text-white px-16 pt-[20%] bg-gradient-to-r from-black w-full aspect-video">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="w-1/2 mb-4">{description}</p>
      <div className="my-3">
        <button className="bg-white rounded p-3 mr-2 text-black hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="bg-gray-500 rounded p-3 text-white bg-opacity-50">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
