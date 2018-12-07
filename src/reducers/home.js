import {
    HOME_SUCCESS,
    HOME_FAILED,
    HOME_REQUEST,
    HOME_LOGIN,
} from '../constants/home'


const initialState = {
	requesting: false,
	user: {},
	error: null,
	success: false
};


export default function register(state = initialState, action) {
	switch (action.type) {

		case HOME_REQUEST:
			return Object.assign({}, state, {
				requesting: true,
				error: null
			});
		case HOME_SUCCESS:
			return Object.assign({}, state, {
				requesting: false,
				success: true,
				error: null,
				user: action.payload,
			});
		case HOME_FAILED:
			return Object.assign({}, state, {
				requesting: false,
				success: false,
				error: action.payload,
			});
		case HOME_LOGIN:
			localStorage.clear()
			return Object.assign({}, state, initialState);

		default:
			return state;
	}
}
