import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMostPopularVideos } from "../store/videosList";
import { API_KEY, API_LINK } from "../utils/constants";

export const useFetchVideos = () => {
  // const [videosList, setVideosList] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    fetchVideosList();
  }, []);

  const fetchVideosList = async () => {
    const data = await fetch(
      API_LINK + API_KEY + "&rel=0&modestBranding=1&maxResults=20"
    );
    const json = await data.json();
    // console.log(json.items);
    dispatch(addMostPopularVideos(json.items));
    // setVideosList(json.items);
  };

  // return videosList;
};
