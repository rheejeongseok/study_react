import React, { useState } from 'react';
import '../utils/css/reset.css';
import './style.css';
import friends from '../utils/api/friend';
import FriendList from './FriendList';

const Friend = () => {

    const [data, setData] = useState(friends)
    
    const onDel = () => {
        setData([]);
    }

    return (
        <div className="wrap">
            <h1>친구들 총원: {data.length}</h1>
            <FriendList data={data} />
            <p className="btn">
                <button onClick={onDel}>모두제거</button>
            </p>
        </div>
    );
};

export default Friend;