import { useEffect } from "react";
import { API_options, movies_url } from "../utils/moviesConstants";
import { addGptResult } from "../store/gptSlice";
import { useDispatch } from "react-redux";

const useFetchMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const data = await fetch(movies_url + "Hera Pheri", API_options);
    const json = await data.json();
    dispatch(addGptResult({ moviesList: json }));
    console.log(json);
  };
};

export default useFetchMovies;
