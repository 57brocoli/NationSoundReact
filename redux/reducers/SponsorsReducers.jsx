import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import localSponsors from './../../src/Assets/Data/Sponsor.json'
import axios from "axios";

export const fetchSponsors = createAsyncThunk('sponsors/fetchSponsors', async () => {
    try {
        const response = await axios.get('https://pixelevent.site/api/sponsors')
        return response.data['hydra:member']
    } catch {
        return localSponsors
    }
})

const initialSponsorsState = {
    sponsors : [],
    status : "idle",
    error : null
}

const sponsorsSlice = createSlice({
    name: 'sponsors',
    initialState : initialSponsorsState,
    reducers:{},
    extraReducers:builder => {
        builder
            .addCase(fetchSponsors.pending, state => {
                state.status = 'loading'
            })
            .addCase(fetchSponsors.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.sponsors = action.payload
            })
            .addCase(fetchSponsors.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default sponsorsSlice.reducer;