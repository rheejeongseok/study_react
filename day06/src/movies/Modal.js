import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Modal = ({mid, close}) => {

    const {movieNm, thumbUrl, director} = mid

    return (
        <div className="modal">
            <div className="bg" onClick={close}></div>
            <div className="popup">
                <h2>{movieNm}</h2>
                <div>
                    <img src={thumbUrl} alt={movieNm} />
                </div>
                <h3>{director}</h3>
                <p className="close" onClick={close}>
                    <AiOutlineCloseCircle />
                </p>
            </div>
        </div>
    );
};

export default Modal;