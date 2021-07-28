import React, { createContext, useState } from 'react';

export const CountContext = createContext();

const CountProvider = (props) => {

   const [count, setCount] = useState(0);

   const onCount = (text) => {
      text === 'up' ? setCount(count + 1) : setCount(count - 1);
   }

   const onReset = () => {
      setCount(0);
   }

   return (
      <CountContext.Provider value={{count, onCount, onReset}}>
         {props.children}
      </CountContext.Provider>
   );
};

export default CountProvider;