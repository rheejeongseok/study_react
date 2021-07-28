import React from 'react';
import BoardUser from './BoardUser';

const BoardUserList = ({userList}) => {
   return (
      <>
         {
            userList.map(e => <div key={e.no}>
               <BoardUser user={e} />
            </div>)
         }
      </>
   );
};

export default BoardUserList;