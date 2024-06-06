import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLieux = createAsyncThunk('lieux/fetchLieux', async () => {
    const response = await axios.get("https://pixelevent.site/api/lieus");
    return response.data['hydra:member'];
})

const initialLieuxState = {
    lieux: [],
    status: 'idle',
    error: null, 
};

const lieuxSlice = createSlice({
    name: "lieux",
    initialState: initialLieuxState,
    reducers:{},
    extraReducers: builder => {
        builder
            .addCase(fetchLieux.pending, state => {
                state.status = 'loading'
            })
            .addCase(fetchLieux.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.lieux = action.payload
            })
            .addCase(fetchLieux.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

    }
})

export default lieuxSlice.reducer;