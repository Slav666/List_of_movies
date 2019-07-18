import React from 'react';

const Pagination = (props) => {
    const {itemCount, pageSize} = props;
    const pageCount = itemCount / pageSize;
    return (
    <nav>
        <ul className="pagination">
            <li className="page-item">
            <a className="page-link" >{pageCount}</a></li>
        </ul>
    </nav>
    )
}
 
export default Pagination;