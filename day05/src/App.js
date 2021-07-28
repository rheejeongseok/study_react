import React from 'react';
import Test1 from './components/Test1';
import FriendMine from './friendsMine/FriendMine';
import MoviesMine from './movieMine/MoviesMine';
import Music from './music/Music';
import Todos from './todo/Todos';

const App = () => {
  return (
    <div>
      <div style={{marginBottom:150}}>
        <Todos />
      </div>
      <div style={{marginBottom:150}}>
        <FriendMine />
      </div>
      <div style={{marginBottom:150}}>
        <MoviesMine />
      </div>
      <div style={{marginBottom:150}}>
        <Music />
      </div>
    </div>
  );
};

export default App;