import React from 'react';

const ItemUser = ({data, onRemove, onModify}) => {

   const {id, name, jobs} = data

   return (
      <tr>
         <td>{name}</td>
         <td>{jobs}</td>
         <td>
            <button onClick={() => onModify(data)}>수정</button>
            <button onClick={() => onRemove(id)}>삭제</button>
         </td>
      </tr>
   );
};

export default ItemUser;

