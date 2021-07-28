import React from 'react';
import ItemUser2 from './ItemUser2';

const ListUser2 = ({data,onRemove,onPick}) => {
   return (
      <table>
         <thead>
            <th>챔피언</th>
            <th>하는일</th>
            <th>궁극기</th>
            <th></th>
         </thead>
         <tbody>
         {
            data.map(e => <ItemUser2 key={e.id} data={e} onRemove={onRemove} onPick={onPick} />)
         }
         </tbody>
      </table>
   );
};

export default ListUser2;