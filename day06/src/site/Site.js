import React, { useState } from 'react';
import './style.scss';
import '../utils/css/reset.css';
import Join from './user/Join';
import Board from './board/Board';

const Site = () => {

   const [user, setUser] = useState({});
   const [flag, setFlag] = useState('init');
   const [hasJoin, setHasJoin] = useState(false);

   const chnFlag = (e) => {
      const flag = e.target.dataset["flag"];
      setFlag(flag)
   }

   const onJoin = (form) => {
      setHasJoin(true)
      setUser(form)
      setFlag('init')
   }

   return (
      <div className="wrap">
         <div className="header">
            <div className="list">
               {
                  !hasJoin ? <span className="join">회원가입</span> : <span className="user">{user.name}님</span>
               }
            </div>
            <div className="title">
               보드 테스트
            </div>
         </div>
         <div className="content">
            {
               flag === 'init' && 
               <div className="initPage">
                  <span data-flag="join" onClick={chnFlag}>가입 하기</span>
                  <span data-flag="boardList" onClick={chnFlag}>게시판 보기</span>
               </div>
            }
            {
               flag === 'join' &&
               <Join onJoin={onJoin} />
            }
            {
               flag === 'boardList' && 
               <Board />
            }
         </div>
         <div className="footer">

         </div>
      </div>
   );
};

export default Site;