import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../../../utils/css/about.css';
// import video from '../../../images/about/floor7.mp4';

const video_list = [
   {video:'./images/about/autoinside_app.mp4'},
   {video:'./images/about/floor7.mp4'},
   {video:'./images/about/floor8.mp4'},
   {video:'./images/about/coffee&doughnut.mp4'},
   {video:'./images/about/_ceo.mp4'},
   {video:'./images/about/_clock.mp4'},
]

const AboutIntro = () => {

   const [list, setList] = useState(video_list);
   const [video, setVideo] = useState(list[0]['video']);
   const [random,setRandom] = useState(0);

   useEffect(() => {
      const movie_wrap = document.querySelector('#movie_wrap');
      movie_wrap.addEventListener('ended',() => {
         setRandom(Math.floor(Math.random() * list.length));
         setVideo(list[random]['video']);
         console.log("aaa");
      })
   },[])

   return (
      <div className="section">
         <div className="movie">
            <video id="movie_wrap" autoPlay muted>
               <source id="movie_src" src={video}/>
            </video>
         </div>
            <img src="./images/about/his21_bg.png" alt="" style={{position:'absolute',top:'0',left:'0'}} />
      </div>
   );
};

export default React.memo(AboutIntro);