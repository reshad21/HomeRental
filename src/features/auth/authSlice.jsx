import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from './../../firebase/firebase.config';
const initialState = {
    email: "",
    isLoading: true,
    isError: false,
    error: "",
    role: ""
}

export const createUser = createAsyncThunk("auth/createUser", async ({ email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data.user.email;
})

export const loginUser = createAsyncThunk("auth/loginUser", async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data.user.email;
})

export const googleLogIn = createAsyncThunk("auth/googleLogin", async () => {
    const provider = new GoogleAuthProvider();
    const data = await signInWithPopup(auth, provider);
    return data.user.email;
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.email = "";
        },
        setUser: (state, { payload }) => {
            state.email = payload;
            state.isLoading = false;
        },
        toggleLoading: (state) => {
            state.isLoading = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = ""
        }).addCase(createUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.email = action.payload;
            state.error = "";
        }).addCase(createUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message

        }).addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = ""
        }).addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.email = action.payload;
            state.error = "";
        }).addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message

        }).addCase(googleLogIn.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = ""
        }).addCase(googleLogIn.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.email = action.payload;
            state.error = "";
        }).addCase(googleLogIn.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.error = action.error.message
        })
    }
})

export const { logout, setUser, toggleLoading } = authSlice.actions;

export default authSlice.reducer;