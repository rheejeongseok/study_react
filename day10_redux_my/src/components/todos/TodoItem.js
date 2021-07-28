import React from 'react';

const TodoItem = ({item}) => {
   return (
      <div>
         {item.id} / {item.text}
      </div>
   );
};

export default TodoItem;