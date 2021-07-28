import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from '../../store/modules/todos';

const TodoItem = ({todo}) => {
    const {id,text } = todo
    const dispacth  = useDispatch()

    return (
        <div>
            {id} / {text} 
            <button onClick={() => dispacth(remove(id))}>삭제</button>
        </div>
    );
};

export default TodoItem;