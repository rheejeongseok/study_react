const TOMATO = 'color/TOMATO';
const SKYBLUE = 'color/SKYBLUE';
const HOTPINK = 'color/HOTPINK';

export const tomato = () => ({type:TOMATO})
export const skyblue = () => ({type:SKYBLUE})
export const hotpink = () => ({type:HOTPINK})

const initail = {color:'red'};

const reducer = (state = initail, action) => {
   switch(action.type){
      case TOMATO : 
         return {
            color:'tomato'
         }
      case SKYBLUE : 
         return {
            color:'skyblue'
         }
      case HOTPINK :
         return {
            color:'hotpink'
         }
      default :
         return state
   }
}

export default reducer