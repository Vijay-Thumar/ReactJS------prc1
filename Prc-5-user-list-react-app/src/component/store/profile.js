import { createSlice } from "@reduxjs/toolkit";

const initialProfileState = { 
    IsMouseEntred : false,
}

const profileSlice = createSlice({
    name: "profile",
    initialState: initialProfileState,
    reducers:{
        showProfile(state){
            state.IsMouseEntred = true;
        },
        hideProfile(state){
            state.IsMouseEntred = false;
        }
    }
});

export const profileAction = profileSlice.actions;
export default profileSlice.reducer;