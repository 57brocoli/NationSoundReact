import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEpisodes = createAsyncThunk('episodes/fetchEpisodes', async () => {
    const response = await axios.get('https://pixelevent.site/api/episodes')
    return response.data['hydra:member']
})

const initialEpisodesState = {
    episodes : [],
    status : 'idle',
    error: null
}

const episodesSlice = createSlice({
    name: 'episodes',
    initialState:initialEpisodesState,
    reducers:{},
    extraReducers: builder => {
        builder
        .addCase(fetchEpisodes.pending, state =>{
            state.status = 'loading'
        })
        .addCase(fetchEpisodes.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.episodes = action.payload
        })
        .addCase(fetchEpisodes.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export default episodesSlice.reducer;