import React, {Component} from 'react'; 
  

class MovieTable extends Component {
    
    raiseSort = path => {
        const sortColumn = {...this.props.sortColumn};
        if (sortColumn.path === path)
        sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
        else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.props.onSort(sortColumn);
    };
    render() { 

        const {movies, onDelete} = this.props;

    return ( 
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col" onClick={() => this.reiseSort('title')}>Title</th>
                    <th scope="col" onClick={() => this.reiseSort('genre.name')}>Genre</th>
                    <th scope="col" onClick={() => this.reiseSort('numberInStock')}>Stock</th>
                    <th scope="col" onClick={() => this.reiseSort('dailyRentalRate')}>Rate</th>
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
}
 


  
export default MovieTable;