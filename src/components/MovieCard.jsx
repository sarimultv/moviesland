const MovieCard = ({ movie }) => {
  const imgSrc = movie?.titlePosterImageModel?.url;
  const imgAlt = movie?.titleNameText;

  return (
    imgSrc && (
      <div className="md:w-56 w-32 pb-2 mb-1 rounded">
        <img
          className="md:w-56 md:h-80 w-32 h-44 rounded"
          src={imgSrc}
          alt={imgAlt}
        />
      </div>
    )
  );
};

export default MovieCard;
