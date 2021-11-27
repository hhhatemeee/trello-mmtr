import React from 'react'
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import TitleBoard from './TitleBoard';
const UniqueBoard = () => {

    const location = useLocation();
    const url = location.pathname
    const decodeUrl = decodeURI(url);
    // const title = (url.slice(url.indexOf('/', 2) + 1)).replace(/%20/g, ' ')
    const title = decodeUrl.slice(decodeUrl.indexOf('/', 2) + 1);
    return (
        <div>
            <TitleBoard title={title} />
        </div>
    )

}

export default UniqueBoard
