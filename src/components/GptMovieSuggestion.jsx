import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const gptStore = useSelector((store) => store.gpt);
  const { movieNames, moviesList } = gptStore;
  if (!movieNames) return null;

  return (
    moviesList.length !== 0 && (
      <div className="p-4 m-4 bg-gray-800 text-white bg-opacity-85">
        {movieNames.map((movieNames, index) => (
          <MovieList
            key={movieNames}
            title={movieNames}
            movies={moviesList[index].titleResults.results}
          />
        ))}
      </div>
    )
  );
};

export default GptMovieSuggestion;
