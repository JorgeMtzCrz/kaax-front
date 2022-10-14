import React, {useReducer, createContext, useEffect, useContext} from 'react'
import handleAsync from './utils/handleAsync'
import AUTH_SERVICE from './services/auth_service'
import Loader from './components/Loader'

export const AuthStateContext = createContext({})

const initialState = {
    status: 'pending',
    error: null,
    user: null
}

const reducer = (state, action) => {
    switch(action.type){
        case 'SET_USER':
            return {
                status: 'success',
                error: null,
                user: action.payload
            }
        
        case 'LOGIN': 
            return {
                status: 'success',
                error: null,
                user: action.payload.user
            }
        case 'LOGOUT':
            return {
                status: 'success',
                error: null,
                user: null
            }
        default:
            return initialState
    }
}

export const AuthProvider = ({children}) =>{
    useEffect(()=>{
        getUser()
    }, [])
    
    const [state, dispatch] = useReducer(reducer, initialState)
    const isPending = state.status === 'pending'

    async function getUser(){
        const accessToken = JSON.parse(localStorage.getItem('accessToken'))
        let response
        response = await AUTH_SERVICE.CURRENT_USER(accessToken).catch(err => response = err.response.data)
        if(response.msg === 'Unauthorized'){
            dispatch({type: 'SET_USER', payload: null})
        }else{
            dispatch({type: 'SET_USER', payload: response.data.user})
        }
    }

    return (
        <AuthStateContext.Provider value={[state, dispatch]}>{isPending ? <Loader/> : children}</AuthStateContext.Provider>
    )
}

export const useAuth = () => useContext(AuthStateContext)