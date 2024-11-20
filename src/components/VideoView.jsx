import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const VideoView = () => {
  const { videoId } = useParams();
  const mostPopular = useSelector((store) => store.videos.mostPopular);
  const [videoTitle] = mostPopular.filter((item) => item.id === videoId);

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-50 p-2">
      <div className="md:py-3 md:px-3 md:mx-[4rem] flex justify-end">
        <div>
          <div>
            <iframe
              className="w-[70%] max-sm:w-[100%] aspect-video rounded-lg shadow-lg"
              src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&playerapiid=myvideo&version=3&rel=0&autoplay=1&mute=1&loop=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className="pt-2 max-sm:w-[100%] w-[75%]">
              <p className="py-3 font-bold text-xl">
                {videoTitle?.snippet?.title.slice(0, 78)}
              </p>
              <div className="md:w-[92%] py-2">
                <p className="p-2 border border-gray-400 shadow-md rounded-lg">
                  {videoTitle?.snippet?.description.slice(0, 249)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 w-3 h-3 rounded-full p-4 flex items-center justify-center absolute mr-4 mt-4 shadow-md">
          <Link to={"/browse"}>X</Link>
        </div>
      </div>
    </div>
  );
};

export default VideoView;
