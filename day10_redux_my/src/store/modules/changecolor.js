const CHANGECOLOR = 'changecolor/CHANGECOLOR';

export const changecolor = (color) => ({type:CHANGECOLOR,color});

const init = {color:'beige'};

const reducer = (state = init, action) => {
   switch(action.type){
      default :
         return state
      case CHANGECOLOR :
         return {
            color:action.color
         }
   }
}

export default reducer;