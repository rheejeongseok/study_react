import React from 'react';
import MusicItem from './MusicItem';

const MusicList = ({data}) => {
   return (
      <table>
         <thead>
            <tr>
               <td>이름</td>
               <td>나이</td>
               <td>활동유형</td>
               <td>데뷔이</td>
               <td>탄생</td>
               <td>좋아요</td>
            </tr>
         </thead>
         <tbody>
         {
            data.map(e => <MusicItem key={e.id} data={e} />)
         }
         </tbody>
      </table>
   );
};

export default MusicList;