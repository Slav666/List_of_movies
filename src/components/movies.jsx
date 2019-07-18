import React, { Component } from 'react';
import { getMovies} from '../services/fakeMovieService';
import ListGroup from './listGroup';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './pagination';
import { paginate } from '../utils/paginate';
import MovieTable from './movieTable';
import _ from 'lodash';


class Movies extends Component {

    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        sortColumn: {path: 'title', order: 'asc'}
        
        
    }

    componentDidMount(){
        const genres = [{ _id: '', name: 'All Genres'},...getGenres()];
        this.setState({movies: getMovies(), genres});
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({movies});
    }

    handleGenreSelect = genre => {
        this.setState({selectedGenre: genre, currentPage: 1});
    }
    handlePageChange = (page) => {
        this.setState({currentPage: page});

    }

    handleSort = path => {
        this.setState({sortColumn: {path, order: 'asc'}})
    };

    render() { 
        const {length: count} = this.state.movies
        const {pageSize, currentPage, selectedGenre, movies: allMovies, sortColumn} = this.state
        const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;

       const sorted = _.orderBy(filtered , [sortColumn.path], [sortColumn.order])

        if( count === 0) return <p>There are no movies in the database.</p>;
        const movies = paginate(sorted, currentPage, pageSize);
        return ( 
            <div className="row">
                <div className="col-3" >
                    <ListGroup 
                    items={this.state.genres}
                    selectedItem={this.state.selectedGenre}
                    onItemSelect={this.handleGenreSelect} 
                     />
                </div>
                <div className="col">
                    <h1>List of Movies</h1>
                    <p>There are {filtered.length} in the database.</p>
                    <MovieTable 
                    movies={movies} 
                    onDelete={this.handleDelete}
                    onSort={this.handleSort}
                    
                    />
                    <Pagination 
                    itemCount={filtered.length} 
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
