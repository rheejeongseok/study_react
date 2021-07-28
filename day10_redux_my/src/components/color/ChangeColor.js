import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changecolor } from '../../store/modules/changecolor';
import { down, reset, up } from '../../store/modules/count';

const ChangeColor = () => {

   const color = useSelector(state => state.changecolor.color);
   const count = useSelector(state => state.count.number);
   const dispatch = useDispatch();

   return (
      <div>
         <h1 style={{color:color}}>color : {color}</h1>
         <h1>count : {count}</h1>
         <p>
            <button onClick={() => dispatch(changecolor('blueviolet'))} >blueviolet</button>
            <button onClick={() => dispatch(changecolor('cadetblue'))} >cadetblue</button>
            <button onClick={() => dispatch(changecolor('darkkhaki'))} >darkkhaki</button>
         </p>
         <p>
            <button onClick={() => dispatch(up())} >UP</button>
            <button onClick={() => dispatch(down())} >DOWN</button>
            <button onClick={() => dispatch(reset())} >RESET</button>
         </p>
      </div>
   );
};

export default ChangeColor;