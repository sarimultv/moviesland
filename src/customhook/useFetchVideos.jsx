import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMostPopularVideos } from "../utils/store.js/videosList";
import { API_KEY, API_LINK } from "../utils/constants";

export const useFetchVideos = () => {
  // const [videosList, setVideosList] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    fetchVideosList();
  }, []);

  const fetchVideosList = async () => {
    const data = await fetch(API_LINK + API_KEY);
    const json = await data.json();
    console.log(json.items);
    dispatch(addMostPopularVideos(json.items));
    // setVideosList(json.items);
  };

  // return videosList;
};
