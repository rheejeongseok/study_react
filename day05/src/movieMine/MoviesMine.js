import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import '../utils/css/reset.css';
import '../utils/css/animate.css';
import './style.css';
import data from '../utils/api/movie.json';
import MovieViewMine from './MovieViewMine';
import MovieListMine from './MovieListMine';
import ModalMine from './ModalMine';

const MoviesMine = () => {

   const [movies ,setMovies] = useState(data);
   const [view, setView] = useState(movies[0]);
   const [modal, setModal] = useState(false);

   const chnView = (num) => {
      setView(movies[num])
   }

   const showModal = () => {
      setModal(!modal)
   }

   return (
      <div className="gallery">
         <MovieViewMine view={view} showModal={showModal} />
         <MovieListMine movies={movies} chnView={chnView} />
         { modal && <ModalMine view={view} showModal={showModal} modal={modal} />}  
      </div>
   );
};

export default MoviesMine;