import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Pagination = (props) => {

    const {itemCount, pageSize, onPageChange, currentPage} = props;
    console.log(currentPage)
    const pageCount = Math.ceil(itemCount / pageSize);
    const pages = _.range(1, pageCount + 1);

    if (pageCount === 1) return null
    return (
        <nav>
            <ul className="pagination">
                
                {pages.map(page => ( 
                <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'} >
                <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
                </li>
                ))}
            
            </ul>
        </nav>
    );
}
Pagination.propTypes = {
    itemCount: PropTypes.number.isRequired, 
    pageSize: PropTypes.number.isRequired, 
    onPageChange: PropTypes.number.isRequired, 
    currentPage: PropTypes.func.isRequired
}
 
export default Pagination;