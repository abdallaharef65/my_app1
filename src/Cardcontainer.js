import clases from "./App.module.css";

function Card(props) {
  let movie = props.item;
  // console.log(movie);

  return (
    <div>
      <div className={clases.movie}>
        <div>
          <p>{movie.Year}</p>
        </div>

        <div>
          <img
            src={
              movie.Poster === "N/A"
                ? "https://via.placeholder.com/400"
                : movie.Poster
            }
            alt={movie.Title}
          />
        </div>

        <div>
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
