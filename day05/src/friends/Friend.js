import React, { useRef, useState } from 'react';
import '../utils/css/reset.css'
import FriendInput from './FriendInput';
import FriendList from './FriendList';
import './style.css'
import data from '../utils/api/friend'

const Friend = () => {
    const no = useRef( data.length + 1 )
    const [friends, setFriends] = useState(data)
    const [friendsAll, setFriendsAll] = useState(data)
    const [isView , setIsView] = useState( false )


    const onAdd  = (form)  => {
        form.id = no.current++
        setFriends([ ...friends , form ])
    }

    const onDel = ( id ) => {
        setFriends( friends.filter( friend => friend.id !== id ))
    }

    const onRemove  = ()  => {
         setFriends([])   
    }
    const onRestore  = ()  => {
        setFriends( friendsAll )
    }

    return (
        <div className="Friend">
            <h1>친구들 총인원 : {friends.length }명</h1>

            <span className="chk">
                <input type="checkbox" checked={isView} 
                onChange={e => setIsView( e.target.checked)}/>
                {isView ? '추가비활성':'추가활성'}
            </span>

            <FriendList  friends={friends}  onDel={onDel} />

            <p className="btn">
                <button onClick={ onRemove }>모두삭제</button>
                <button onClick={ onRestore }>초기복구</button>
            </p>

            { isView && <FriendInput onAdd={onAdd} />  }
        </div>
    );
};

export default Friend;