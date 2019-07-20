import React, {Component} from 'react'; 
import Table from './table';
import {Link} from "react-router-dom";

class MovieTable extends Component {
    
    columns = [
        {path: 'title', label: 'Title', content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        {key: 'delete', content: movie => (<button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(movie)}> 
        Delete
        </button>)}
        
    ];
       
    render() { 

        const {movies, sortColumn, onSort} = this.props;

    return ( 
        <Table columns={this.columns} data={movies} sortColumn={sortColumn} onSort={onSort}/>
    );
    }
}
 
// table-dark

  
export default MovieTable;
