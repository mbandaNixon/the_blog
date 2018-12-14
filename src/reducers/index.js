import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import home from './home';
import sidebar from './sidebar'

const appReducer = combineReducers({
    routing: routerReducer,
    home,
    sidebar
 });


export default (state, action) => {
    if(action.type === 'CLEAR_STORE'){
        state = undefined;
    }
    return appReducer(state, action);
}