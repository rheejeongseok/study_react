import React from 'react';
import FriendItem from './FriendItem';

const FriendList = ({data}) => {
    return (
        <ul>
            {
                data.map(e => {
                    return <FriendItem data={e} />
                })
            }
            
        </ul>
    );
};

export default FriendList;