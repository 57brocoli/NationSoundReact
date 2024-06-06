import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFaqs = createAsyncThunk('faqs/fetchFaqs', async () => {
    const response = await axios.get('https://pixelevent.site/api/f_a_qs')
    return response.data['hydra:member']
})

const initialFaqsState = {
    faqs : [],
    status : "idle",
    error : null
}

const faqsSlice = createSlice({
    name : 'faqs',
    initialState : initialFaqsState,
    reducers : {},
    extraReducers : builder => {
        builder
        .addCase(fetchFaqs.pending, state => {
            state.status = 'loading'
        })
        .addCase(fetchFaqs.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.faqs = action.payload
        })
        .addCase(fetchFaqs.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })

    }
})

export default faqsSlice.reducer;