import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';
  
 
const Table = (props) => {

    const {columns, sortColumn, onSort, data} = props;
    return ( 
        <table className="table table-dark">
            <TableHeader 
            columns={columns} 
            sortColumn={sortColumn} 
            onSort={onSort}
            />
            <TableBody columns={columns} data={data}/>
            
        </table> 
     );
}
 
export default Table;