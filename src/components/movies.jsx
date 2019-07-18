import React, { Component } from 'react';
import { getMovies} from '../services/fakeMovieService';
import ListGroup from './listGroup';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './pagination';
class Movies extends Component {

    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1
        
    }

    componentDidMount(){
        this.setState({movies: getMovies(), genres: getGenres()});
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({movies});
    }

    handleGenreSelect = genre => {
        this.setState({selectedGenre: genre});
    }
    handlePageChange = (page) => {
        this.setState({currentPage: page});
    }
    render() { 
        if( this.state.movies.length === 0) return <p>There are no movies in the database.</p>;
        return ( 
            <div className="row">
                <div className="col-3" >
                    <ListGroup items={this.state.genres}
                     onItemSelect={this.handleGenreSelect} 
                     selectedItem={this.state.selectedGenre}/>
                </div>
                <div className="col">
                    <h1>List of Movies</h1>
                    <p>There are {this.state.movies.length} in the database.</p>
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
                    <Pagination 
                    itemCount={this.state.movies.length} 
                    pageSize={this.state.pageSize} 
                    onPageChange={this.handlePageChange}
                    currentPage={this.state.currentPage}
                    />
                </div>
            </div>
        );
    }
}
  
export default Movies;
