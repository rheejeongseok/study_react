import React from 'react';

const BoardCon = ({findCon, pageSet}) => {
   const {title, con} = findCon
   return (
      <div>
         <div><span>제목 : {title}</span></div>
         <div>
            내용 : <textarea name="" id="" cols="30" rows="10">{con}</textarea>
         </div>
         <button onClick={() => pageSet(3)}>게시판으로</button>
      </div>
   );
};

export default BoardCon;