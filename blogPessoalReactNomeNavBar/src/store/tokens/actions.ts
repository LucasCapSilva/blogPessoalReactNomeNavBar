export type Action = {type: "ADD_TOKEN"|"ADD_NAME"; payload: string};

export const addToken = (token: string): Action =>({
    type: "ADD_TOKEN",
    payload: token,
});

export const addName = (name: string): Action =>({
    type: "ADD_NAME",
    payload: name,
});