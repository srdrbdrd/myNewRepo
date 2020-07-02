import {createContext} from 'react'

export const initialState={
    user:{},
    post:{}
}
export default Context=createContext(initialState)