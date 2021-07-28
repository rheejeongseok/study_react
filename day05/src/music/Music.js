import React, { useState } from 'react';
import music_data from '../utils/api/music';
import singer_data from '../utils/api/singer';
import MusicList from './MusicList';
import SingerInfo from './SingerInfo';
import '../utils/css/reset.css';
import './style.scss';
import Songs from './Songs';

const Music = () => {

   const [music, setMusic] = useState(music_data);
   const [singer, setSinger] = useState(singer_data);
   const [info, setInfo] = useState(singer_data[0]);
   const [pop, setPop] = useState(false);

   const showSongs = () => {

   }

   return (
      <div className="musicWrap">
         <SingerInfo info={info} music={music} showSongs={showSongs} />
         <MusicList data={singer} />
         <Songs info={info} music={music} pop={pop} />
      </div>
   );
};

export default Music;
