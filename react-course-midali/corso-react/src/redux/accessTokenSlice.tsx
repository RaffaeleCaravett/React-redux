import { createSlice } from "@reduxjs/toolkit";

export const accessTokenSlice = createSlice({
    name:'accessToken',
    initialState:{
        accessToken:''
    },
    reducers:{
        setAccessToken: (accessToken,action)=>{
            accessToken.accessToken=action.payload.accessToken
        },
        deleteAccessToken: (accessToken)=>{
           accessToken.accessToken=''
    }
}
})

export const {setAccessToken, deleteAccessToken} = accessTokenSlice.actions;
export const accessTokenReducer = accessTokenSlice.reducer;