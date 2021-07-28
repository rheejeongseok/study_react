import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hotpink, skyblue, tomato } from '../../store/modules/color';

const Color = () => {
    const color = useSelector( state => state.color.color)
    const dispatch = useDispatch()

    return (
        <div>
            <h1 style={{color:color}}>컬러: {color} </h1>
            <p>
                <button onClick={() => dispatch(tomato())}>tomato</button>
                <button onClick={() => dispatch(skyblue())}>skyblue</button>
                <button onClick={() => dispatch(hotpink())}>hotpink</button>
            </p>
        </div>
    );
};

export default Color;