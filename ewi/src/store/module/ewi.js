import data from '../../utils/api/data.json'

const WORD = 'ewi/WORD';
const ONFPARTS = 'ewi/ONFPARTS';
const ONSELECTION = 'ewi/ONSELECTION';
const ONSHOWPART = 'ewi/ONSHOWPART';
const SETFDATA = 'ewi/SETFDATA';
const INITSEARCHDATA = 'ewi/INITSEARCHDATA';

export const word = (text) => ({type:WORD, text});
export const onFparts = (text) => ({type:ONFPARTS, text});
export const onSelection = (condition) => ({type:ONSELECTION, condition});
export const onShowPart = (condition) => ({type:ONSHOWPART, condition});
export const setFdata = (label) => ({type:SETFDATA, label});
export const initSearchData = () => ({type:INITSEARCHDATA});

const variable = {
   word : '',
   parts : data,
   fParts : [],
   showSelection : false,
   showPart : false,
   fData : {}
}

const reducer = (state = variable, action) => {
   switch(action.type){
      default : 
         return state;
      case WORD :
         return {
            ...state,
            word:action.text
         }
      case ONFPARTS :
         return {
            ...state,
            word:action.text,
            fParts:action.text === '' ? [] : state.parts.filter(e => e.label.indexOf(action.text) !== -1 ),
         }
      case ONSELECTION :
         return {
            ...state,
            showSelection : action.condition
         }
      case ONSHOWPART :
         return {
            ...state,
            showPart : action.condition
         }
      case SETFDATA :
         return {
            ...state,
            fData : data.find(e => e.label === action.label)
         }
      case INITSEARCHDATA :
         return {
            ...state,
            word:'',
            fParts:[]
         }
   }
}

export default reducer;