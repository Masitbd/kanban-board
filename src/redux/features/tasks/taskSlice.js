import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    tasks: []
}
const taskSlice = createSlice({
    name: 'taskSlice',
    initialState,
    reducers:{
        addTask:(state, {payload})=>{
            if (state.tasks.length === 0) {
                state.tasks.push({id:1, ...payload})
            }

            else{
                const length = state.tasks.length
                state.tasks.push({id: length+1, ...payload}) 
            }
          
         }
    }
})

export const {addTask} = taskSlice.actions 
export default taskSlice.reducer