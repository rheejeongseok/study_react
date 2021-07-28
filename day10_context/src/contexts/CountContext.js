import React, { createContext, useContext, useState } from 'react';

const CountContext  = createContext()

const CountProvier = (props) => {
    const [ count , setCount ] = useState(0)

    const increment = ()  => { setCount( count + 1 )}
    const decrement = ()  => { setCount( count + 1 )}

    return (
        <CountContext.Provider value={{count, increment, decrement}}>
            {props.children}
        </CountContext.Provider>
    );
};
export default CountProvier;

// 사용자 정의훅 
export const useCount = () => {
    const {count, increment, decrement} = useContext( CountContext )
    return  {count, increment, decrement}
}