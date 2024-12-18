import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GeminiMovieSuggestion = () => {
  const geminiStore = useSelector((store) => store.gemini);
  const { movieNames, moviesList } = geminiStore;
  if (!movieNames) return null;

  return moviesList.length === 0 ? (
    <div className="p-4 m-4 bg-gray-800 text-white bg-opacity-85 rounded">
      <span>Loading ...</span>
    </div>
  ) : (
    <div className="p-4 m-4 bg-gray-800 text-white bg-opacity-85 rounded">
      {movieNames.map((movieNames, index) => (
        <MovieList
          key={movieNames}
          title={movieNames}
          movies={moviesList[index].titleResults.results}
        />
      ))}
    </div>
  );
};

export default GeminiMovieSuggestion;
