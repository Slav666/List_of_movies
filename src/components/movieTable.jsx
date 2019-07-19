import React, {Component} from 'react'; 
import TableHeader from './tableHeader';

import TableBody from './tableBody';
  

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
        <table className="table table-dark">
            <TableHeader 
            columns={this.columns} 
            sortColumn={sortColumn} 
            onSort={onSort}
            />
            <TableBody columns={this.columns} data={movies}/>
            
        </table> 
    );
    }
}
 


  
export default MovieTable;