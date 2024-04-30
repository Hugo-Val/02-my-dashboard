import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

 
interface CounterState {
  count : number;
}
 
const initialState : CounterState = {
  count : 5
}
 
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    //  : (state, action: PayloadAction<number>) => {
    //   state.value = action.payload;
    // }
  }
});
 
export const {  } = counterSlice.actions;
export default counterSlice.reducer;