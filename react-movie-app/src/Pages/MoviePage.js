import { useParams } from "react-router-dom";

const MoviePage = (props) => {
  const { movieList } = props;
  const params = useParams();
  const movie = movieList.find((movie) => {
    return movie.Title === params.title;
  });
  const titleParam = params.title;
  const max = movie.Images.length;
  const min = 0;
  const range = (max, min) => {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
  };
  console.log(movie.Images);
  return (
    <div>
      <h1>Movie Page</h1>
      {movieList.map((movie, index) => {
        if (movie.Title === titleParam) {
          return (
            <div key={index}>
              <h2>Title: {movie.Title}</h2>
              {movie.Director !== "N/A" ? ( <p>Director: {movie.Director}</p>) : (<p></p>)}
              <p>Actors: {movie.Actors}</p>
              <p>Plot: {movie.Plot}</p>

            </div>
          );
        }
      })}
    </div>
  );
};

export default MoviePage;