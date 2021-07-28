import React from 'react';
import BoardWrite from './BoardWrite';

const BoardList = ({boardList, showCon, chnWrite, boardState, writeBoard, onWriteBoard, comWrite}) => {
   return (
      <div>
         {  boardState === 1 &&
            boardList.map(e => <div key={e.no}>
               <span style={{marginRight:10}} onClick={() => showCon(e.no)}>제목 : {e.title}</span>
               <span style={{marginRight:10}}>조회수 : {e.click}</span>
               <span style={{marginRight:10}}>날짜 : {e.date}</span>
               <span>작성자 : {e.writer}</span>
               <hr />
            </div>)
         }
         { boardState === 2 && <BoardWrite writeBoard={writeBoard} onWriteBoard={onWriteBoard} comWrite={comWrite}/> }
         { boardState === 1 && <button onClick={chnWrite}>게시물 작성</button>}
      </div>
   );
};

export default BoardList;