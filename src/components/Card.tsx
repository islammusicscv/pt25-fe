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
    data: MovieList | Genre;
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
}

const Card = ({ data, onDelete, onEdit }: CardProps) => {
  return (
      <>
          <div className="col" key={data.id}>
              <div className="card shadow-sm">
                  <div className="card-body">
                      <h5>{data.name}</h5>
                      <p className="card-text">{data.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                              <button onClick={() => onDelete(data.id)} type="button"
                                      className="btn btn-sm btn-outline-secondary">Izbriši
                              </button>
                              <button onClick={() => onEdit(data.id)} type="button"
                                      className="btn btn-sm btn-outline-secondary">Uredi
                              </button>
                          </div>
                          {"genre" in data && (
                              <small className="text-body-secondary">
                                  {data.genre?.name || 'ni žanra'}
                              </small>
                          )}
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}
export default Card;