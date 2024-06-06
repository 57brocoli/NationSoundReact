import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import localBillet from "./../../src/Assets/Data/Billets.json"

export const fetchBillets = createAsyncThunk('billets/fetchBillets', async () => {
    try {
        const response = await axios.get("https://pixelevent.site/api/billets");
        return response.data['hydra:member'];
    } catch {
        return localBillet
    }
    
})

const initialBilletState = {
    billets: [],
    status: 'idle',
    error: null, 
};

const billetsSlice = createSlice({
    name: "billets",
    initialState: initialBilletState,
    reducers:{},
    extraReducers: builder => {
        builder
            .addCase(fetchBillets.pending, state => {
                state.status = 'loading'
            })
            .addCase(fetchBillets.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.billets = action.payload
            })
            .addCase(fetchBillets.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

    }
})

export default billetsSlice.reducer;