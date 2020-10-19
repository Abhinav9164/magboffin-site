import { USER_LOGIN, SET_USER, LOG_OUT, REG_USER } from "./types";
import axios from 'axios';
import history from '../history';

const base_URL_API = " https://magboffin.pythonanywhere.com/api-v1"

export const LoginActions = (state, action) => {
    switch (action.type) {
        case USER_LOGIN: {
            let username = action.payload.username;
            let password = action.payload.password;
            axios
                .post(`${base_URL_API}/auth/login/`, { username, password })
                .then((res) => {
                    console.log(res)
                    localStorage.setItem('userKey', res.data.key)
                    action.dispatch({
                        type: SET_USER,
                        payload: {
                            isUserAutheticated: true,
                            userKey: res.data.key,
                        },
                    })
                    history.push('/dashboard');
                })
                .catch((err) => {
                    console.log(err)
                    action.dispatch({
                        type: SET_USER,
                        payload: {
                            isUserAutheticated: false,
                            userKey: "",
                        },
                    })
                })
            return state
        }

        default:
            return state;
    }
}


export const RegUser = (state, action) => {
    switch (action.type) {
        case REG_USER: {
            let username = action.payload.username;
            let email = action.payload.email;
            let password1 = action.payload.password1;
            let password2 = action.payload.password2;
            axios
                .post(`${base_URL_API}/registration/`, { email, username, password1, password2 })
                .then((res) => {
                    console.log(res)
                    localStorage.setItem('userKey', res.data.key)
                    action.dispatch({
                        type: SET_USER,
                        payload: {
                            isUserAutheticated: true,
                            userKey: res.data.key,
                        },
                    })
                    history.push('/dashboard');
                })
                .catch((err) => {
                    console.log(err)
                    action.dispatch({
                        type: SET_USER,
                        payload: {
                            isUserAutheticated: false,
                            userKey: "",
                        },
                    })
                })
            return state
        }

        default:
            return state;
    }
}




export const Logout = (state, action) => {
    switch (action.type) {
        case LOG_OUT: {
            localStorage.clear()
            history.push('/');
            window.location.reload()
            return true
        }

        default:
            return state;
    }
}