import React, { useReducer, useState } from 'react';

const initialState = 0 
const reducer = ( state , action ) => {
    switch( action.type ) {
        case 'INCREMENT' :
            return state = state+1
        case 'DECREMENT' :
            return state = state <= 0 ? 0 : state-1
        case 'RESET' :
            return 0
        default:
            return state           
    }
}

const Test3 = () => {
    // const [상태변수, dispatch ] = useReducer(함수,초기값)
    const [count, dispatch ] = useReducer(reducer , initialState)
    return (
        <div>
            <h4> useReducer </h4>
            <h1> {count} </h1>
            <p>
                {/* type:별칭 - 영문(상수형이 좋다 - 대문자 ) */}
                {/* INCREMENT , DECREMENT , RESET */}
                <button onClick={() => dispatch({type:'INCREMENT'})}>증가</button>
                <button onClick={() => dispatch({type:'DECREMENT'})}>감소</button>
                <button onClick={() => dispatch({type:'RESET'})}>초기화</button>
            </p>
        </div>
    );
};

export default Test3;