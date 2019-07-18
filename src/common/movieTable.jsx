import React from 'react'; 
 const MovieTable = (props) => {
     const {movies, onDelete} = props;
     return ( <table className="table table-dark">
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
                     <button className="btn btn-danger" onClick={() => onDelete(movie)}> 
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