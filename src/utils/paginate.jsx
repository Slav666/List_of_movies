import _ from 'lodash';

export function Paginate(items, pageNumber, pageSize) {
    // below variable to calculate starting index  for the items on the pageNumber 
    const startIndex = (pageNumber -1) * pageSize;
    return _(items)
    .slice(startIndex).
    take(pageSize).
    value();
}