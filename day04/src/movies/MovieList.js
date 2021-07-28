import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({data, onDel}) => {
    return (
        <>
        {
            data.map(e => 
                <MovieItem data={e} onDel={onDel} key={e.no}/>
            )
        }
        </>
    );
};

export default MovieList;