import * as types from '../constants/sidebar'

const initialState = {
    collapsed: false,
    appsDropdowns: {}
};

export default (state = initialState, action) => {
    switch (action.type) {

        case types.TOGGLE_SIDEBAR:
            return {
                ...state,
                collapsed: !state.collapsed,
            };

        case types.TOGGLE_APP_SIDE_BAR_MENU:
            return {
                ...state,
                appsDropdowns: {
                    ...state.appsDropdowns,
                    [`${action.payload}-dropdownOpen`]: ! state.appsDropdowns[`${action.payload}-dropdownOpen`]
                }
            }
        default: return state;
    }
}
