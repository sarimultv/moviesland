import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    movies.length !== 0 && (
      <div className="md:px-8">
        <h1 className="font-bold text-lg py-3 text-white">{title}</h1>
        <div className="flex overflow-x-scroll">
          <div className="flex gap-2">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
