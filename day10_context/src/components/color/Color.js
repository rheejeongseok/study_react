import React from 'react';
import { useColor } from '../../contexts/ColorContext';

const Color = () => {
    const {color, onRed, onPink, onLime, onTomato, onSkyblue} = useColor()

    return (
        <div>
            <h1 style={{color:color}}>컬러 :{color} </h1>
            <p>
                <button onClick={onRed}>red</button>
                <button onClick={onPink}>pink</button>
                <button onClick={onLime}>lime</button>
                <button onClick={onTomato}>tomato</button>
                <button onClick={onSkyblue}>skyblue</button>
            </p>
        </div>
    );
};

export default Color;