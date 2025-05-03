import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import storage from "@/app/(onboarding)/storage";

interface AuthState {
    isLoading: boolean ;
    token: string | null;
    user: any
}

const initialState : AuthState = {
    token: null,
    user: null,
    isLoading: false
}


// Thunk to load user from the expo secure store

export const loadUserFromStorage= createAsyncThunk(
    "user/loadUserFromStorage",
    async ()=>{
        const token= await storage.getToken();
        const user= await storage.getUser();
        return {token,user}
    }
)


const userSlice= createSlice({
  name:"user",
  initialState,
  reducers: {

    loginSuccess:  (state,action)=>{
        state.token= action.payload.token;
        state.user= action.payload.user;
    },
    logout: (state)=>{
        state.token = null,
        state.user= null;
        storage.removeToken();
    }

  },
  extraReducers: (builder)=>{
    builder.addCase(loadUserFromStorage.pending,(state,action)=>{
        state.isLoading=true;
    })
    builder.addCase(loadUserFromStorage.fulfilled, (state,action)=>{
        state.token= action.payload.token;
        state.user= action.payload.user;
        state.isLoading=false;
    })
    builder.addCase(loadUserFromStorage.rejected,(state)=>{
        state.isLoading=false
    })
  }
})


export default userSlice.reducer;


export const  {loginSuccess,logout} = userSlice.actions


