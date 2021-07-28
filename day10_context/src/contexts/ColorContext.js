import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext()

const ColorProvier = (props) => {
    //color의 모든행동과 상태값
    const [color , setColor] = useState('green')
    const onRed = () => { setColor('red')}
    const onPink = () => { setColor('pink')}
    const onLime = () => { setColor('lime')}
    const onTomato = () => { setColor('tomato')}
    const onSkyblue = () => { setColor('skyblue')}

    return (
        <ColorContext.Provider value={{color, onRed, onPink, onLime, onTomato, onSkyblue}}>
            {props.children}
            {/* <Color /> */}
        </ColorContext.Provider>
    );
};

export default ColorProvier;

export const useColor = ()  => {
    const {color, onRed, onPink, onLime, onTomato, onSkyblue} = useContext( ColorContext )
    return {color, onRed, onPink, onLime, onTomato, onSkyblue}
}