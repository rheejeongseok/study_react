import React from 'react';

const JoinStep4 = ({userForm,onPage,onJoin}) => {
   return (
      <div>
         {userForm.name} 님 정보가 맞으시면 진행해도 되죠?
         <div>
            <button onClick={() => onPage('prev')}>이전</button>
            <button onClick={onJoin}>확인</button>
         </div>
      </div>
   );
};

export default JoinStep4;