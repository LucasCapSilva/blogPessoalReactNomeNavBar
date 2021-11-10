import {Action } from './actions';

export interface TokenState {
    tokens: string,
    names: string,
}

const initialState = {
    tokens: "",
    names: ""
}

export const tokenReducer = (state: any = initialState, action: Action) =>{
    switch (action.type){
        case "ADD_TOKEN": {
            return {tokens: action.payload, names: state.names}
        }
        case "ADD_NAME": {
            return {names: action.payload, tokens: state.tokens}
        }

        default:
            return state
    }
}