import React, {Component} from 'react'; 
import Table from './table';

class MovieTable extends Component {
    
    columns = [
        {path: 'title', label: 'Title'},
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
