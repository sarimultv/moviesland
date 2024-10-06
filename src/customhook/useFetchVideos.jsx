import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMostPopularVideos } from "../store/videosList";
import { API_KEY, API_LINK } from "../utils/constants";

export const useFetchVideos = () => {
  const dispatch = useDispatch();
  const mostPopular = useSelector((store) => store.videos.mostPopular);

  useEffect(() => {
    !mostPopular && fetchVideosList();
  }, []);

  const fetchVideosList = async () => {
    const data = await fetch(
      API_LINK + API_KEY + "&rel=0&modestBranding=1&maxResults=20"
    );
    const json = await data.json();
    dispatch(addMostPopularVideos(json.items));
  };
};
