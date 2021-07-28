import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { down, reset, up } from '../../store/modules/count';

const Count = () => {

   const state = useSelector(state => state.count.number)
   const dispatch = useDispatch();

   return (
      <div>
         <h1>count : {state}</h1>
         <p>
            <button onClick={() => dispatch(up())}>up</button>
            <button onClick={() => dispatch(down())} >down</button>
            <button onClick={() => dispatch(reset())} >reset</button>
         </p>
      </div>
   );
};

export default Count;