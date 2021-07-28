import React, { useContext } from 'react';
import { CountContext } from '../../contexts/CountContext';

const Count = () => {

   const {count, onCount, onReset} = useContext(CountContext);

    return (
        <div>
            <h1>count : {count}</h1>
            <p>
               <button onClick={() => onCount('up')}>증가</button>
               <button onClick={() => onCount('down')}>감소</button>
               <button onClick={() => onReset()}>리셋</button>
            </p>
        </div>
    );
};

export default Count;