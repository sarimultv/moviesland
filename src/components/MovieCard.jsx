const MovieCard = ({ movie }) => {
  //   const videoImg = video?.snippet?.thumbnails?.medium;

  return (
    <div className="w-56 pb-2 mb-1">
      <img
        className="w-56 h-80"
        src={movie.titlePosterImageModel.url}
        alt={movie.titleNameText}
      />
    </div>
  );
};

export default MovieCard;
