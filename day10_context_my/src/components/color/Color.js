import React, { useContext } from 'react';
import { ColorConText } from '../../contexts/ColorContext';

const Color = () => {

   const {color, onColor} = useContext(ColorConText);

   return (
      <div>
         <h1 style={{color:color}}>color : {color}</h1>
         <p>
            <button onClick={() => onColor('#74808a')}>color:01</button>
            <button onClick={() => onColor('#8be8b0')}>color:02</button>
            <button onClick={() => onColor('#b460b9')}>color:03</button>
            <button onClick={() => onColor('#4340ff')}>color:04</button>
            <button onClick={() => onColor('#e02121')}>color:05</button>
            <button onClick={() => onColor('#fff794')}>color:06</button>
         </p>
      </div>
   );
};

export default Color;