const CHANGETEXT = 'todos/CHANGETEXT';
const INSERT = 'todos/INSERT';

export const changetext = (text) => ({type:CHANGETEXT,text})
export const insert = (text) => ({type:INSERT,form:{id:no++,text}});

let no = 5;
const init = {
   text : 'radnom',
   todos : [
      {id:1, text:'rheeeeeeeeeeeeeeJS'},
      {id:2, text:'jsJSjsJSjsJSjsJS'},
      {id:3, text:'rRRRRRRRRRRRRRR'},
      {id:4, text:'dlwjdtjr dlwjdtjr dlwjdtjr'},
   ]
}

const reducer = (state = init, action) => {
   switch(action.type){
      default :
      return state;
      case CHANGETEXT :
      return {
         ...state,
         text:action.text
      }
      case INSERT :
      return {
         ...state,
         todos : [...state.todos,action.form]
      }
   }

}

export default reducer