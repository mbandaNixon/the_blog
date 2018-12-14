import * as types from '../constants/sidebar'

export function toggleCollapse() {
    return {
        type: types.TOGGLE_SIDEBAR
    };
}

export function toggleAppSideBaeMenu(appId) {
    return {
        type: types.TOGGLE_APP_SIDE_BAR_MENU,
        payload: appId
    };
}


