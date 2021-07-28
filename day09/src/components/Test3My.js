import React, {useReducer} from 'react';

const init = {count:0};
const reducer = (state, action) => {
   switch(action.type){
      default :
         return state
      case 'UP' :
         return {
            count : state.count+1
         }
      case 'DOWN' : 
         return {
            count : state.count-1
         }
      case 'RESET' : 
         return {
            count : 0
         }
   }
}

const Test3My = () => {

   const [count, dispatch] = useReducer(reducer, init)

   return (
      <div>
         <h1>count : {count.count}</h1>
         <p>
            <button onClick={() => dispatch({type:'UP'})}>증가</button>
            <button onClick={() => dispatch({type:'DOWN'})}>감소</button>
            <button onClick={() => dispatch({type:"RESET"})}>리셋</button>
         </p>
      </div>
   );
};

export default Test3My;