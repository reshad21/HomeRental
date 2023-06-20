import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    cart: [],
}

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, addToCart } = serviceSlice.actions;

export default serviceSlice.reducer;