import React from 'react';
import { AiFillThunderbolt } from "react-icons/ai";
import './Modal.css';

const Modal = ({onClose, find}) => {

    const {title, singer, key} = find;

    return (
        <div className="Modal">
            <div className="bg" onClick={onClose}></div>
            <div className="popup">
                <h2>곡 : {title}</h2>
                <div>
                <iframe width="1280" height="720" src={`https://www.youtube.com/embed/${key}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p>가수명 : {singer}</p>
                <span onClick={onClose}>
                    <i><AiFillThunderbolt /></i>
                </span>
            </div>
        </div>
    );
};

export default Modal;

