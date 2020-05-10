import React, {useReducer} from "react";
import {GitHubReducer} from "./GitHubReducer";
import {GitHubContext} from './gitHubContent'
import {CLEAR_USER, GET_REPO, GET_USER, SEARCH_USERS, SET_LOADING} from "../Alert/ActionType";
import axios from 'axios'

const clientId = process.env.REACT_APP_CLIENT_ID
const clientSecret = process.env.REACT_APP_CLIENT_SECRET

export const GitHubState = ({children}) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }
    const [state, dispatch] = useReducer(GitHubReducer, initialState)


    const search = async value => {
        setLoading()
        //<!-- Request server -->
        const response = await axios.get(
            `https://api.github.com/search/users?q=${value}&client_id=${clientId}&client_secret=${clientSecret}`
        )
        dispatch({type: SEARCH_USERS, payload: response.data.items})
    }

    const getUser = async name => {
        setLoading()
        //<!-- Request server -->
        const response = await axios.get(
            `https://api.github.com/users/${name}?&client_id=${clientId}&client_secret=${clientSecret}`
        )
        dispatch({type: GET_USER, payload: response.data})
    }

    const getRepos = async name => {
        setLoading()
        //<!-- Request server -->
        const response = await axios.get(
            `https://api.github.com/users/${name}/repos?per_page=5&client_id=${clientId}&client_secret=${clientSecret}`
        )
        dispatch({type: GET_REPO, payload: response.data})
    }


    const clearUsers = () => dispatch({type: CLEAR_USER})
    const setLoading = () => dispatch({type: SET_LOADING})

    const {user, users, repos, loading} = state

    return (
        <GitHubContext.Provider
            value={{setLoading, clearUsers, getRepos, getUser, search, user, users, repos, loading}}>
            {children}
        </GitHubContext.Provider>
    )
}