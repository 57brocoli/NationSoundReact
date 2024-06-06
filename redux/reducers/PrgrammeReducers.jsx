import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProgramme = createAsyncThunk('programme/fetchProgramme', async ()=>{
    const response = await axios.get("https://pixelevent.site/api/days")
    return response.data['hydra:member']
})

const initialProgrammeState = {
    programme: [],
    state: 'idle',
    error: null
}

const programmeSlice = createSlice({
    name:'programme',
    initialState:initialProgrammeState,
    reducers:{},
    extraReducers:builder => {
        builder
            .addCase(fetchProgramme.pending, state => {
                state.status = 'loading'
            })
            .addCase(fetchProgramme.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.programme = action.payload
            })
            .addCase(fetchProgramme.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default programmeSlice.reducer