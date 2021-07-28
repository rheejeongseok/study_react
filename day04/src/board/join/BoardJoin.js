import React from 'react';
import JoinStep1 from './JoinStep1';
import JoinStep2 from './JoinStep2';
import JoinStep3 from './JoinStep3';
import JoinStep4 from './JoinStep4';

const BoardJoin = ({userForm, step, onForm, onPage, onJoin}) => {
   return (
      <div>
         {step === 1 && <JoinStep1 userForm={userForm} step={step} onForm={onForm} onPage={onPage}/>}
         {step === 2 && <JoinStep2 userForm={userForm} step={step} onForm={onForm} onPage={onPage}/>}
         {step === 3 && <JoinStep3 userForm={userForm} step={step} onForm={onForm} onPage={onPage}/>}
         {step === 4 && <JoinStep4 userForm={userForm} step={step} onForm={onForm} onPage={onPage} onJoin={onJoin} />}
      </div>
   );
};

export default BoardJoin;