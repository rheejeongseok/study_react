import React, { useState } from 'react';
import '../utils/css/reset.css'
import './style.css'
import data from '../utils/api/movie.json'
import MovieView from './MovieView';
import MovieList from './MovieList';
import Modal from './Modal';

const Movies = () => {
    const [ movies , setMovies] = useState(data)
    const [ mid, setMid] = useState(movies[0]);
    const [ show, setShow] = useState(false);

    const chnView = (num) => {
        // setMid(movies[num-1])
        setMid(movies.find(e => e.rank === num))
    }

    const open = () => {
        setShow(!show)
    }
    const close = () => {
        setShow(!show)
    }

    return (
        <div className="gallery">
             <MovieView mid={mid} open={open} />   
             <MovieList movies={movies} chnView={chnView}/>   
             {
                 show && <Modal mid={mid} close={close}/>
             }
             
        </div>
    );
};

export default Movies;