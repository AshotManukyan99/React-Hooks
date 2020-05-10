import {HIDE_ALERT, SHOW_ALERT} from "./ActionType";


export const alertReducer = (state  , action) => {
    switch (action.type) {
        case SHOW_ALERT :
            return action.payload
        case HIDE_ALERT :
            return null
        default:
            return state
    }
}