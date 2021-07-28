import React from 'react';

const MusicItem = ({data, showMusic}) => {

   const {id, singer,age,type,debut,birth,fans,image} = data

   const nAge = (num) => {
      if(this===0) return 0;
      var reg = /(^[+-]?\d+)(\d{3})/;
      var n = (num + '');
      while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
      return n;
   }

   return (
      <>
         <div className="musicWrap">
            <div className="left">
               <div className="imgWrap">
                  <img src={image} alt={singer} />
               </div>
               <div className="s_name">{singer}</div>
               <div className="s_birth">{birth}</div>
               <div className="music" onClick={() => showMusic(id)}>대표곡 보기</div>
            </div>
            <div className="right">
               <div className="s_age">
                  <span>나이</span>
                  <span>{age}</span>
               </div>
               <div className="s_type">
                  <span>유형</span>
                  <span>{type}</span>
               </div>
               <div className="s_debut">
                  <span>데뷔</span>
                  <span>{debut}</span>
               </div>
               <div className="s_fans">
                  <span>조아오</span>
                  <span>{nAge(fans)}</span>
               </div>
            </div>
         </div>  
      </>
   );
};

export default MusicItem;