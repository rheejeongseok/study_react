import history from '../../utils/data/history';
import map from '../../utils/data/map';

const CHANGEHEADER = 'about/CHANGEHEADER';

export const changeHeader = (text) => ({type:CHANGEHEADER,text});

const init = {
	header:"type01",
	year_list : history,
	about_map : map
}

const reducer = (state = init, action) => {
	switch(action.type){
		default :
		return state;
		case CHANGEHEADER :
		return {
			...state,
			header:action.text
		}
	}
}

export default reducer;