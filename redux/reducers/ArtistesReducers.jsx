import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import localArtiste from './../../src/Assets/Data/Artiste.json'

export const fetchArtistes = createAsyncThunk('artistes/fetchArtistes', async () => {
    try {
        const response = await axios.get("https://pixelevent.site/api/artistes")
        return response.data["hydra:member"]
    } catch {
        return localArtiste
    }
    
})

const initialArtisteState = {
    artistes: [],
    status:'idle',
    error: null
}

const artisteSlice = createSlice({
    name:'artistes',
    initialState:initialArtisteState,
    reducers:{},
    extraReducers: builder => {
        builder
        .addCase(fetchArtistes.pending, state => {
            state.status = 'loading'
        })
        .addCase(fetchArtistes.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.artistes = action.payload.reverse()
        })
        .addCase(fetchArtistes.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export default artisteSlice.reducer;