const MovieCard = () => {
  return (
    <div className="card mb-3">
      <img src="" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{/* movie title */}</h5>
        {/* Movie Rating */}
        <p className="card-text">{/* Movie Description */}</p>
        <a href="#!" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
