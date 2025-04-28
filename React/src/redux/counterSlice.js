
import { createSlice } from "@reduxjs/toolkit";

let counterSlice=createSlice({
    name:'counter',
    initialState:{value:0},
    reducers:{
        inc:(s)=>{s.value+=1},
        dec:(s)=>{s.value-=1}
    }
})
export default counterSlice.reducer
export const {inc,dec}=counterSlice.actions