import React, { Component } from 'react';
import { getMovies} from '../services/fakeMovieService';
import ListGroup from './listGroup';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './pagination';

import { paginate } from '../utils/paginate';
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
        const {length: count} = this.state.movies
        const {pageSize, currentPage, selectedGenre, movies: allMovies} = this.state

        if( count === 0) return <p>There are no movies in the database.</p>;
        const movies = paginate(allMovies, currentPage, pageSize);
        return ( 
            <div className="row">
                <div className="col-3" >
                    <ListGroup items={this.state.genres}
                     onItemSelect={this.handleGenreSelect} 
                     selectedItem={selectedGenre}/>
                </div>
                <div className="col">
                    <h1>List of Movies</h1>
                    <p>There are {count} in the database.</p>
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
                            {movies.map(movie => (
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
                    itemCount={count} 
                    pageSize={pageSize} 
                    onPageChange={this.handlePageChange}
                    currentPage={currentPage}
                    />
                </div>
            </div>
        );
    }
}
  
export default Movies;
