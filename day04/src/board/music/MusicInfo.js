import React, { useState } from 'react';

const MusicInfo = ({music, singers, sNum, showList}) => {

   const er = singers.filter(e => e.id === sNum)
   const sing = music.filter(e => e.singerId === sNum)

   const {singer,birth,image} = er;

   const [show, setShow] = useState(true);
   const [lyricNum,setLyricNum] = useState(0);

   const onShow = (num) => {
      setLyricNum(num)
      setShow(!show)
   }
   
   return (
      <>
         <button onClick={() => showList()}>리스트보기</button>
         <div className="singer">
            <div className="left">
               <div className="imgWrap">
                  <img src={image} alt="" />
               </div>
               <div className="s_name">{singer}</div>
               <div className="s_birth">{birth}</div>
            </div>
            <div className="right">
               <ul>
                  {
                     sing.map(e => <li key={e.id}>
                     <div className="info">
                        <span>
                           <img src={e.image} alt="" />
                        </span>
                        <span>{e.title}</span>
                        <span>{e.album}</span>
                     </div>
                     <div className="lyric">
                        <div onClick={() => onShow(e.id)}>가사보기</div>
                        { !show && e.id === lyricNum && <div>{e.lyric}</div>}
                     </div>
                     </li>)
                  }
               </ul>
            </div>
         </div>
      </>
   );
};

export default MusicInfo;