import {CLEAR_USER, GET_REPO, GET_USER, SEARCH_USERS, SET_LOADING} from "../Alert/ActionType";


export const GitHubReducer = (state, action) => {
    switch (action.type) {
        case SEARCH_USERS :
            return {...state, users: action.payload, loading: false}
        case GET_REPO :
            return {...state, repos: action.payload, loading: false}
        case GET_USER :
            return {...state, user: action.payload, loading: false}
        case SET_LOADING:
            return {...state, loading: true}
        case CLEAR_USER:
            return {...state, users: []}
        default :
            return state

    }

}