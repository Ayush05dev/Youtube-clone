import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:'search',
    initialState:{},
    reducers:{
        cacheResults:(state,action)=>{
            Object.assign(state,action.payload); // This merges action.payload into state without reassigning state
            //return {...state,...action.payload} // This returns a new object with the combined state.
// Redux Toolkit allows mutating state in reducers due to Immer, but the mutation must happen to properties of state, not state itself.


            // below two methods are wrong methods as state is immuatbel you can not directly assign other object to it
           // state={...action.payload , ...state}
            // state=Object.assign(state,action.payload)
        }
    }
})

export const {cacheResults}= searchSlice.actions;
export default searchSlice.reducer;