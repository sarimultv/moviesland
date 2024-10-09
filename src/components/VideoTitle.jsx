const VideoTitle = ({ title, description }) => {
  return (
    <div className="absolute text-white px-4 md:px-16 md:pt-[20%] pt-[35%] bg-gradient-to-r from-black w-full aspect-video">
      <h1 className="md:text-4xl font-bold md:mb-4">{title.slice(0, 34)}</h1>
      <p className="w-1/2 mb-4 hidden md:block">{description.slice(0, 300)}</p>
      <div className="my-3">
        <button className="bg-white rounded md:p-3 p-1 mr-2 text-black hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="bg-gray-500 rounded md:p-3 p-1 text-white bg-opacity-50">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
