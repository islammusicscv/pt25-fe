interface Genre {
    id: number;
    name: string;
    description: string;
}

interface MovieList {
    id: number;
    name: string;
    description: string;
    genre: Genre;
}

interface CardProps {
    data: MovieList;
    deleteMovie: (id: number) => void;
    editMovie: (id: number) => void;
}

const Card = ({ data, deleteMovie, editMovie }: CardProps) => {
  return (
      <>
          <div className="col" key={data.id}>
              <div className="card shadow-sm">
                  <div className="card-body">
                      <h5>{data.name}</h5>
                      <p className="card-text">{data.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                              <button onClick={() => deleteMovie(data.id)} type="button"
                                      className="btn btn-sm btn-outline-secondary">Izbriši
                              </button>
                              <button onClick={() => editMovie(data.id)} type="button"
                                      className="btn btn-sm btn-outline-secondary">Uredi
                              </button>
                          </div>
                          <small className="text-body-secondary">{data.genre?.name || 'ni žanra'}</small>
                      </div>
                  </div>
              </div>
          </div>
          </>
          )
          }
          export default Card;