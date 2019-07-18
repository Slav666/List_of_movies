import React from 'react'; 

const MovieTable = (props) => {

    const {movies, onDelete, onSort} = props;

    return ( 
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col" onClick={() => onSort('title')}>Title</th>
                    <th scope="col" onClick={() => onSort('genre.name')}>Genre</th>
                    <th scope="col" onClick={() => onSort('numberInStock')}>Stock</th>
                    <th scope="col" onClick={() => onSort('dailyRentalRate')}>Rate</th>
                </tr>
            </thead>
            <tbody> 
                {movies.map(movie => (
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td>
                            <button className="btn btn-danger btn-sm" onClick={() => onDelete(movie)}> 
                                Delete
                            </button>
                      </td>
                    </tr>
                ))}
     
     
            </tbody>
        </table> 
    );
}
  
export default MovieTable;