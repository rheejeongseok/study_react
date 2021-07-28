import React from 'react';
import FriendItem from './FriendItemMine';

const FriendListMine = ({list, onDel, onLoad, listDel}) => {
   return (
      <div>
         <ul>
         {
            list.map(e =>  <FriendItem key={e.id} item={e} listDel={listDel} />)
         }
         </ul>
         <p className="btn">
            <button onClick={onDel}>모두 삭제</button>
            <button onClick={onLoad}>초기 복구</button>
         </p>
      </div>
   );
};

export default FriendListMine;