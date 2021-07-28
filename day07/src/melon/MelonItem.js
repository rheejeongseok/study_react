import React from 'react';
import { AiFillHeart, AiOutlineVideoCamera, AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineSmallDash } from "react-icons/ai";
import Numeral from 'numeral';
const MelonItem = ({data, onLike, onOpen}) => {

    const {rank, title, singer, poster, state, like, done, album, id} = data
    return (
        <tr>
            <td>{rank}</td>
            <td className="img">
                <img src={poster} alt="" />
                <p>
                    <span>{title}</span>{singer}
                </p>
            </td>
            <td>{album}</td>
            <td className="like">
                <i onClick={() => onLike(id)}>
                    {done ? <AiFillHeart color="red"/> : <AiFillHeart/>}
                    {Numeral(like).format(0,0)}
                </i>
            </td>
            <td onClick={() => onOpen(id)}><i><AiOutlineVideoCamera  /></i></td>
            <td>
                { state === '유지' && <AiOutlineSmallDash />}
                { state === '상승' && <AiOutlineArrowUp color="red"/> }
                { state === '하강' && <AiOutlineArrowDown color="blue"/> }
            </td>
        </tr>
    );
};

export default MelonItem;