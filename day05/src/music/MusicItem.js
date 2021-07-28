import React from 'react';

const MusicItem = ({data}) => {

   const {singer, age, type, debut, birth, fans} = data;

   return (
      <tr>
         <td>{singer}</td>
         <td>{age}</td>
         <td>{type}</td>
         <td>{debut}</td>
         <td>{birth}</td>
         <td>{fans}</td>
      </tr>
   );
};

export default MusicItem;