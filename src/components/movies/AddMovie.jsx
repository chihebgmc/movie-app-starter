const AddMovie = props => {
  return (
    <div className="mb-5">
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addMovie"
      >
        Add new movie
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="addMovie"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Movie
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">
                    Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="genre" className="form-label">
                    Genre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="genre"
                    name="genre"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="rating" className="form-label">
                    Rating
                  </label>
                  <input
                    type="number"
                    max={5}
                    min={0}
                    className="form-control"
                    id="rating"
                    name="rating"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="posterURL" className="form-label">
                    Poster
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="posterURL"
                    name="posterURL"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="trailer" className="form-label">
                    Trailer
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="trailer"
                    name="trailer"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    required
                  ></textarea>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
