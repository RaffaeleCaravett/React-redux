import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'user',
    initialState:{
        id:null,
        nome:'',
        cognome:'',
        email:'',
        password:'',
        role:'',
        blogs:[]
    },
    reducers:{
        setUser: (user,action)=>{
            user.id=action.payload.id,
            user.nome=action.payload.nome,
            user.cognome=action.payload.cognome,
            user.email=action.payload.email,
            user.password=action.payload.password,
            user.role=action.payload.role,
            user.blogs=action.payload.blogs
        },
        deleteUser: (user)=>{
            user.id=null,
            user.nome='',
            user.cognome='',
            user.email='',
            user.password='',
            user.role='',
            user.blogs=[]
        }
    }
})

export const {setUser, deleteUser} = userSlice.actions;
export const userReducer = userSlice.reducer;