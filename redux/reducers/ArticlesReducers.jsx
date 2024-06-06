import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () =>{
    const response = await axios.get("https://pixelevent.site/api/articles")
    return response.data['hydra:member'];
})

const initialArticlesState = {
    articles : [],
    status: 'idle',
    error: null
}

const articleSlice = createSlice({
    name:'articles',
    initialState: initialArticlesState,
    reducers:{},
    extraReducers: builder => {
        builder
        .addCase(fetchArticles.pending, state => {
            state.status = 'loading'
        })
        .addCase(fetchArticles.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.articles = action.payload.reverse()
        })
        .addCase(fetchArticles.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export default articleSlice.reducer;