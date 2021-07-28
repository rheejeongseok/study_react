import React from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

const ItemUser2 = ({data, onRemove, onPick}) => {

   const {id, name, jobs, ult, img} = data

   return (
      <tr>
         <td><img src={img} alt="" /></td>
         <td className={`name`}>{name}</td>
         <td className="jobs">{jobs}</td>
         <td className="ult">{ult}</td>
         <td>
            <Button variant="contained" onClick={() => onPick(id)}>수정</Button>
            <Button variant="contained" onClick={() => onRemove(id)}>삭제</Button>
         </td>
      </tr>
   );
};

export default ItemUser2;