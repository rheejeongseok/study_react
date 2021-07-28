const UP = 'count/UP';
const DOWN = 'count/DOWN';
const RESET = 'count/RESET';

export const up = () => ({type:UP});
export const down = () => ({type:DOWN});
export const reset = () => ({type:RESET});

const init = {number:0}

const reducer = (state = init, action) => {
   switch(action.type){

      case UP :
         return {
            number : state.number+1
         }
      case DOWN :
         return {
            number : state.number-1
         }
      case RESET : 
         return {
            number : 0
         }
      default :
         return state
   }
}

export default reducer;