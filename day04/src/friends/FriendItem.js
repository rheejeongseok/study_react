import React from 'react';

const FriendItem = ({data}) => {

    const {id, image, age, name} = data

    return (
        <li key={id}>
            <p>
                <img src={image} alt="" />
            </p>
            <div>
                <strong>이름 : {name} </strong>
                <span>나이 : {age} </span>
            </div>
        </li>
    );
};

export default FriendItem;