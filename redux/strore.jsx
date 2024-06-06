import { configureStore } from "@reduxjs/toolkit";
import billetsReducer from './reducers/BilletsReducers'
import LieuxReducers from "./reducers/LieuxReducers";
import ProgrammeReducers from "./reducers/prgrammeReducers";
import ArticlesReducers from "./reducers/ArticlesReducers";
import ArtistesReducers from "./reducers/ArtistesReducers";
import FaqsReducers from "./reducers/FaqReducers"
import SponsorsReducers from "./reducers/SponsorsReducers";
import EpisodesReducers from "./reducers/EpisodesReducers";

const store = configureStore({
    reducer : {
        billets : billetsReducer,
        lieux: LieuxReducers,
        programme: ProgrammeReducers,
        articles: ArticlesReducers,
        artistes: ArtistesReducers,
        faqs : FaqsReducers,
        sponsors : SponsorsReducers,
        episodes : EpisodesReducers,
    }
})

export default store;