import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    totalPrice: 0,
}

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        addToCart: (state, action) => {

            const selectedProduct = state.cart.find(item => item._id === action.payload._id);
            if (!selectedProduct) {
                const product = { ...action.payload, quentity: 1 };
                state.cart.push(product);
            }
            else {
                selectedProduct.quentity = selectedProduct.quentity + 1;
                state.cart = state.cart.filter(item => item._id !== selectedProduct._id);
                state.cart.push(selectedProduct);
            }
        },
        removeFromCart: (state, action) => {
            if (action.payload.quentity > 1) {
                const product = {
                    ...action.payload,
                    quentity: action.payload.quentity - 1,
                };
                state.cart = state.cart.filter(item => item._id !== action.payload._id);
                state.cart.push(product)
            }
            else {
                state.cart = state.cart.filter(item => item._id !== action.payload._id);
            }
        },

        addToCartTotalPrice: (state) => {
            state.cart.forEach((item) => {
                state.totalPrice += Number(item.price);
            })
        },

        cartTotalPriceDecrees: (state) => {
            state.cart.forEach((item) => {
                state.totalPrice = state.totalPrice - Number(item.price);
                console.log(state.totalPrice);
            })
        },
    },
})

export const { increment, decrement, incrementByAmount, addToCart, removeFromCart, addToCartTotalPrice, cartTotalPriceDecrees } = serviceSlice.actions;

export default serviceSlice.reducer;