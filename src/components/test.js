import React from 'react'
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const Test = () => {

    const location = useLocation();
    console.log(location.pathname.slice(8));
    return (
        <div>
            <h1></h1>
            <h2>{location.pathname.slice(8)}</h2>
        </div>
    )

}

export default Test
