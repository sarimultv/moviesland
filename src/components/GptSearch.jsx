import { useDispatch, useSelector } from "react-redux";
import { LANG_PHRASE } from "../utils/constants";
import { useRef } from "react";
import { googleGemini } from "../utils/googleGemini";
import { addGptResult } from "../store/gptSlice";
import { API_options, movies_url } from "../utils/moviesConstants";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = () => {
  const dispatch = useDispatch();
  const { movieNames } = useSelector((store) => store.gpt);
  const searchText = useRef(null);
  const lang_show = useSelector((store) => store.language.lang);

  const searchMoviesRapidAPI = async (movie) => {
    const data = await fetch(movies_url + movie, API_options);
    const json = await data.json();
    return json;
  };

  const handleForm = async (evt) => {
    evt.preventDefault();
    const gptQuery =
      "work as a movie suggestion system for the query ahead: " +
      searchText.current.value +
      ". Only suggest 1 movie with comma separation like example Andaaz Apna Apna, 3 idiots, Munna Bhai MBBS";

    const result = await googleGemini.generateContent(gptQuery);

    const getMovies = await result.response.text().split(",");
    const promiseArray = getMovies.map((movie) => searchMoviesRapidAPI(movie));
    const moviesList = await Promise.all(promiseArray);
    console.log(moviesList);

    dispatch(addGptResult({ movieNames: getMovies, moviesList: moviesList }));
  };

  return (
    <div className="pt-[10%]">
      <form
        className="bg-gray-950 grid grid-cols-12 w-[50%] p-2 m-auto rounded"
        onSubmit={handleForm}
      >
        <input
          ref={searchText}
          className="p-2 border border-gray-400 bg-white rounded col-span-10 mr-2"
          type="text"
          placeholder={LANG_PHRASE[lang_show].placeholder}
        />
        <input
          className="p-2 border border-none bg-red-800 text-white rounded col-span-2 cursor-pointer hover:bg-red-900"
          type="button"
          value={LANG_PHRASE[lang_show].search}
          onClick={handleForm}
        />
      </form>
      {movieNames.length !== 0 && <GptMovieSuggestion />}
    </div>
  );
};

export default GptSearch;
