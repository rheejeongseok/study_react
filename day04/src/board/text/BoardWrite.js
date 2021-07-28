import React from 'react';

const BoardWrite = ({writeBoard, onWriteBoard, comWrite}) => {

   const {title, con, writer} = writeBoard;
   const today = new Date();
   console.log(today.getFullYear())
   const newDt = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
   
   return (
      <div>
         <div>제목 : <input type="text" value={title} name="title" onChange={(e) => onWriteBoard(e,newDt)} /></div>
         <div>내용 : <textarea name="con" id="" cols="30" rows="10" value={con} onChange={(e) => onWriteBoard(e,newDt)}>{con}</textarea></div>
         <div>작성자 : <input type="text" value={writer} name="writer" onChange={(e) => onWriteBoard(e,newDt)}/></div>
         <button onClick={() => comWrite()}>작성완료</button>
      </div>
   );
};

export default BoardWrite;