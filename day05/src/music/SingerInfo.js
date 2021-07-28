import React from 'react';
import numeral from 'numeral';
import { AiFillHeart } from "react-icons/ai";
import { RiCake2Fill } from "react-icons/ri";

const SingerInfo = ({info, music, showSongs}) => {

   const {id, singer, age, type, debut, birth, fans, image} = info;
   const title = music.filter(e => e.singerId === id);
   console.log(title)

   return (
      <div className="left">
         <div className="imgWrap">
            <img src={image} alt={singer} />
         </div>
         <div className="name">{singer}</div>
         <div className="birth"><RiCake2Fill color=""/>{birth}</div>
         <div className="fans"><AiFillHeart color="red"/>{numeral(fans).format('0,0')}</div>
         <div className="songs" onClick={showSongs}>대표곡 보기</div>
      </div>
   );
};

export default SingerInfo;