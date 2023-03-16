import { createSlice } from "@reduxjs/toolkit";

export const listeSlice = createSlice({
    name: 'liste',
    initialState: [],
    reducers: {
        addToList: (state, action)=>{
            const added = action.payload;
            return[...state, added];
        },
        deleteFromList: (state, action)=>{
            const deleted = action.payload;
            return state.filter(item => item !== deleted);
        },
    }
})

export const { addToList, deleteFromList} = listeSlice.actions;
export default listeSlice.reducer;