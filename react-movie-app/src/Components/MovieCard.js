const MovieCard = (props) => {
  const { movie } = props;
  return (
      <div class= "movie-list-card">
      <h1>{movie.Title}</h1>
      <p>{movie.Director}</p>
      </div>
  )
}

export default MovieCard