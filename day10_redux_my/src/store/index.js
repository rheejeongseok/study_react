import { combineReducers } from "redux";
import color from './modules/color';
import count from './modules/count';
import changecolor from './modules/changecolor';
import todos from './modules/todos';

export default combineReducers({
   color,
   count,
   changecolor,
   todos
})