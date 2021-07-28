import React from 'react';

const FriendItemMine = ({item, listDel}) => {

   const {id, name, age, image} = item;

   return (
      <li style={{display:"flex"}}>
         <p><img src={image} alt={name} /></p>
         <div>
            <strong>이름 : {name}</strong>
            <span>나이 : {age}</span>
            <button onClick={() => listDel(id)}>삭제</button>
         </div>
      </li>
   );
};

export default FriendItemMine;