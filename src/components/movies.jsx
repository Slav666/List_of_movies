import React, { Component } from 'react';
import { getMovies} from '../services/fakeMovieService';

class Movies extends Component {

    state = {
        movies: getMovies()
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({movies})
    }

    render() { 
        return ( 
            <React.Fragment>
             <h1>List of Movies</h1>
                <table className="table table-dark">
                    <thead>
                        <tr >
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {this.state.movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => this.handleDelete(movie)}> 
                                    Delete
                                </button>
                            </td>
                        </tr>
                        ))}
                        
                        
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
  
export default Movies;