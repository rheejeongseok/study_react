import React from 'react';
import ItemUser from './ItemUser';

const ListUser = ({users, onRemove, onModify}) => {
   return (
      <div>
         <h2 className="users">아..아앗 리스트</h2>
         <table>
            <colgroup>
               <col className="name"/>
               <col className="addr"/>
               <col className="list"/>
            </colgroup>
            <thead>
               <tr>
                  <th>이름</th>
                  <th>직업</th>
                  <th>관리</th>
               </tr>
            </thead>
            <tbody>
               {
                  users.map(e => <ItemUser key={e.id} data={e} onRemove={onRemove} onModify={onModify} />)
               }
            </tbody>
         </table>

      </div>
   );
};

export default ListUser;